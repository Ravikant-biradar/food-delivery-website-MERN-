import { Restorent } from "../model/restorent.model.js";


export const create_restorent = async (req, res) => {
  try {
    const { loggedowner } = req.params;
    const {
      restorent_id,
      establishtype,
      describeyouroutlet,
      Typeofcuisines,
      openingtime,
      closingtime,
      opensdays,
    } = req.body;

    console.log(`logeed owner : ${loggedowner}`);
    const saverestorent = new Restorent({
      loggedinownerid: loggedowner,
      restorent_id : restorent_id ,
      establishtype,
      describeyouroutlet,
      Typeofcuisines,
      openingtime,
      closingtime,
      opensdays,
    });

    await saverestorent.save();

    res
      .status(201)
      .json({ mes: "data saved successfully ", data: saverestorent });

    console.log(` logged saverestotype : ${saverestorent}`);
  } catch (error) {
    console.log(`error while creating a restorent : ${error}`);
  }
};

// export const restorent_photos = async (req, res) => {
//   try {
//     const { loggedinowner } = req.params;
//     const {
//       ownerceatedrestoid,
//       restorentfeatureid,
//       menuimg,
//       restoimg,
//       foodimg,
//     } = req.body;

//     const findthem = await Restorent.findById(loggedinowner);
//     console.log(`findthem : --${findthem}`);

//     const saveallimgs = new Restorentphoto({
//       loggedinownerid: loggedinowner,
//       ownerceatedrestoid: ownerceatedrestoid,
//       restorentfeatureid: restorentfeatureid,
//       menuimages: menuimg,
//       restorentimages: restoimg,
//       foodimages: foodimg,
//     });
//     await saveallimgs.save();

//     res
//       .status(200)
//       .json({ mes: "img uploaded successfully", data: saveallimgs });
//   } catch (error) {
//     console.log(`error while addidng img ${error}`);
//   }
// };
