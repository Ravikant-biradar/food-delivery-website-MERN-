import { Owner } from "../model/ownercretedresto.model.js";

export const getallrestorents_controller = async (req, res) => {
  try {
    const get_all_resto = await Owner.find().populate([
      "loggedinownerid",
      "foods",
    ]);
    // console.log(`get_all_resto : ${get_all_resto}`);
    res.send(get_all_resto);
  } catch (error) {
    console.log(`error while fetching all restorents : ${error}`);
  }
};
