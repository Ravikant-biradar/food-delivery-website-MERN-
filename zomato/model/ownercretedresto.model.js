import mongoose from "mongoose";

const ownerShcema = new mongoose.Schema(
  {
    loggedinownerid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Emailregister",
    },

    restorentname: {
      type: String,
    },
    restorentadress: {
      type: String,
    },
    outletlocation: {
      type: String,
    },
    contactnumber: {
      type: String,
    },
    ownername: {
      type: String,
    },
    owneremail: {
      type: String,
    },
    restownerimgs: {
      type: String,
    },
    descibeoutlet: {
      type: String,
    },

    openingtime: {
      type: String,
    },
    closingtime: {
      type: String,
    },
    opendays: {
      type: String,
    },
    restoimg: {
      type: String,
    },
    foods: [{ type: mongoose.Schema.Types.ObjectId, ref: "Food" }],
  },
  { timestamps: true }
);

export const Owner = mongoose.model("Owner", ownerShcema);

// restownerimgs,
// descibeoutlet,
// openingtime,
// closingtime,
// opendays,
// restoimg
