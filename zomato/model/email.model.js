import mongoose from "mongoose";

const emailreg_schema = new mongoose.Schema(
  {
    name: String,
    email: String,
    number: String,
    password: String,
  },
  { timestamps: true }
);

export const Emailregister = mongoose.model("Emailregister", emailreg_schema);
