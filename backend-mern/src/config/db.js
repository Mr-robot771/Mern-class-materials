import mongoose from "mongoose";
export const connectDB = async () => {
  console.log(process.env.MONGO_URI);
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb connected");
  } catch (error) {
    console.error("Mongodb connection failed");
    process.exit(1);
  }
};
