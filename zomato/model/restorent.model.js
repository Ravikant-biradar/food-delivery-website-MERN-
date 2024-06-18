import mongoose from "mongoose";

const restorenttypeSchema = new mongoose.Schema(
  {
    loggedinownerid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Emailregister",
    },

    restorent_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Owner",
    },

    establishtype: {
      type: Array,
    },

    describeyouroutlet: {
      type: Array,
    },
    Typeofcuisines: {
      type: Array,
    },
    openingtime: {
      type: String,
    },
    closingtime: {
      type: String,
    },
    opensdays: {
      type: Array,
    },

    restorenentimgs: {
      type: Array,
    },
  },
  { timestamps: true }
);

export const Restorent = mongoose.model("Restorent", restorenttypeSchema);
