import { User } from "../models/users.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    if (!email || !password) {
      return res.status(400).json({ message: "email and password required" });
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(401).json({ message: "user not found" });
    }

    const isMatch = await bcrypt.compare(password,user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "invalid credentials" });
    }
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res
      .cookie("auth-token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 1000,
      })
      .status(200)
      .json({
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        contactNumber: user.contactNumber,
      });
  } catch (error) {
    console.error("loginUser error:", error);
    return res.status(500).json({ message: "internal server error" });
  }
};
