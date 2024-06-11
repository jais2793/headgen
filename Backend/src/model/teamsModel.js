import mongoose from "mongoose";

const teamsSchema = new mongoose.Schema(
  {
    teamName: {
      type: String, 
      required: [true, "name is required"],
      trim: true
    },
    firstName: {
      type: String,
      required: [true, "first name is required"],
      trim: true
    },
    lastName: {
      type: String,
      required: [true, "last name is required"],
      trim: true
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'phone is required'],
      trim: true
    },
    role: {
      type: String,
      required: [true, 'role is required']
    },
    teamCount: {
      type: Integer,
      required: [true, 'team count is required']
    },
    totalPrice: {
      type: Integer,
      required: [true, 'total price is required']
    },
    price: {
      type: Integer,
      required: [true, 'price per member is required']
    },
    website: {
      type: String,
      default: null,
      trim: true,
    },
  },
  { timestamps: true }
);

export const teamsModel = mongoose.model("team", teamsSchema);
