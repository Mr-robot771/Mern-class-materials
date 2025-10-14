import { User } from "../models/users.js";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 12;

export const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, contactNumber } = req.body;
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "email already in use!" });
    }
    const hashed = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await User.create({
      firstName,
      lastName,
      email,
      contactNumber,
      password: hashed,
    });

    return res
      .status(201)
      .json({ message: "user created successfully", data: user });
  } catch (error) {
    console.error("registerUser error: ", error);
    return res.status(500).json({ message: "internal server error" });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);

    if (!users) {
      res.status(404).json({ message: "users not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);

    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.deleteOne();
    return res.status(200).json({ message: "Succesfully deleted" });
  } catch (error) {
    console.error(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, contactNumber } = req.body;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (email) user.email = email;
    if (contactNumber) user.contactNumber = contactNumber;

    const updatedUser = await user.save();
    return res.status(200).json(updatedUser);
    
  } catch (error) {
    console.error(error);
  }
};
