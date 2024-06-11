import mongoose from "mongoose";

const customersSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
    },
    gender: {
      type: String,
      required: [true, "gender is required"],
      trim: true,
    },
    generationType: {
      type: String,
      required: [true, "generationType is required"],
      trim: true,
    },
    headshotType: {
      type: String,
      default: null,
      trim: true,
    },
    customizeData: {
      type: [String],
      default: null,
    },
    promptData: {
      type: String,
      default: null,
    },
    images: {
      type: [String],
      required: [true, "images are required"],
    },
    packDetails: {
      type: Object,
      required: [true, 'pack details are required']
    }
  },
  { timestamps: true }
);

export const customersModel = mongoose.model("customer", customersSchema);
