import { Food } from "../model/food.model.js";
import { Owner } from "../model/ownercretedresto.model.js";


export const food_controller = async (req, res) => {
  try {
    const { restorent_id } = req.params;
    const {
      name,
      description,
      prize,
      category,
      avalable,
      imgone,
      imgtwo,
      imgthree,
    } = req.body;
    const findrestorent = await Owner.findById(restorent_id);
    console.log(`findrestorent${findrestorent}`);
    const savefood = new Food({
      name,
      description,
      prize,
      category,
      avalable,
      imgone,
      imgtwo,
      imgthree,
    });

    await savefood.save();
    findrestorent.foods.push(savefood._id);
    await findrestorent.save();

    //
    const populatedOwner = await Owner.findById(restorent_id).populate("foods");

    // Send the populated owner data as response
    res.json({ mes: "Data saved successfully", data: populatedOwner });
  } catch (error) {
    console.log(`error while adding the the food ${error}`);
  }
};
