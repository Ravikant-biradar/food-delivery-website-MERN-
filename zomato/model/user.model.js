import mongoose from "mongoose";
const userschema = new mongoose.Schema(
  {
    name: String,
    email: String,
    number: String,
    password: String,
    img: String,
    adress: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Useradress",
      },
    ],
    bookmark: [],
    myorder: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
      },
    ],
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userschema);
