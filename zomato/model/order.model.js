import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    totalamount: {
      type: String,
    },
    
    deliveryadress: {
      type: Object,
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
