import mongoose from "mongoose";
import dotenv from "dotenv";
import chalk from "chalk";

// function to connect connect the mongo database of provided url string
dotenv.config();
export const mongoConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "headgenAI",
    });
    console.log(chalk.white.bgBlue("MongoDB connected successfully"));
  } catch (error) {
    console.log(
      error.message
        ? `MongoDB connection failed: ${error.message}`
        : `MongoDB connection failed`
    );
  }
};
