import { Owner } from "../model/ownercretedresto.model.js";

export const owner_controller = async (req, res) => {
  try {
    const { loggedinownerid } = req.params;
    console.log(`loggedinownerid ${loggedinownerid}`);
    const {
      restorentname,
      restorentadress,
      outletlocation,
      contactnumber,
      ownername,
      owneremail,
      //
      restownerimgs,
      descibeoutlet,
      openingtime,
      closingtime,
      opendays,
      restoimg,
    } = req.body;
    const saveowner = new Owner({
      loggedinownerid: loggedinownerid,
      restorentname,
      restorentadress,
      outletlocation,
      contactnumber,
      ownername,
      owneremail,
      restownerimgs,
      descibeoutlet,
      openingtime,
      closingtime,
      opendays,
      restoimg,
    });
    await saveowner.save();
    res.json({ mes: "data saved succesfully", data: saveowner });
    console.log(saveowner);
  } catch (error) {
    console.log(`error in regestering owner : ${error}`);
  }
};
