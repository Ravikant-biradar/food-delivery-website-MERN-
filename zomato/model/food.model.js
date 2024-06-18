import mongoose from "mongoose";

const foodschema = new mongoose.Schema(
  {
    restorent_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Owner",
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    prize: {
      type: String,
    },
    category: {
      type: String,
    },
    avalable: {},
    imgone: {
      type: String,
    },
    imgtwo: {
      type: String,
    },
    imgthree: {
      type: String,
    },
  },

  { timestamps: true }
);
export const Food = mongoose.model("Food", foodschema);
