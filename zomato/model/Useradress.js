import mongoose from "mongoose";

const Adressschema = new mongoose.Schema(
  {
    loggedinuserid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: String,
    number: String,
    pincode: String,
    area: String,
    town: String,
    state: String,
  },
  { timestamps: true }
);

export const Useradress = mongoose.model("Useradress", Adressschema);
