import { Useradress } from "../model/Useradress.js";
import { User } from "../model/user.model.js";
import bcrypt from "bcrypt";

export const usercontroller = async (req, res) => {
  try {
    const { name, email, number, password, img } = req.body;
    const passwordhash = await bcrypt.hash(password, 10);
    const saveuser = new User({
      name,
      email,
      number,
      password: passwordhash,
      img,
    });
    // console.log(saveuser);
    await saveuser.save();
    res.status(201).json({ mes: "you are successfully Registered" });
  } catch (error) {
    console.log(`error while regisering user : ${error}`);
  }
};

export const user_login_controller = async (req, res) => {
  try {
    const { email, password } = req.body;
    const useremailcheck = await User.findOne({ email });
    // console.log(useremailcheck.password);
    if (!useremailcheck.email) {
      return res.send("user does not exist plz do login");
    }
    const checkpassword = await bcrypt.compare(
      password,
      useremailcheck.password
    );

    if (!checkpassword) {
      return res.send("error");
    }

    res.status(201).json({
      mes: `welcome back  ${useremailcheck.name}`,
      data: useremailcheck,
    });
  } catch (error) {
    console.log(`error in fecthing userdata ${error}`);
  }
};

// get single user

export const getsingleapi = async (req, res) => {
  try {
    const { loggedinuser } = req.params;
    console.log(loggedinuser);

    const finduser = await User.findById(loggedinuser).populate("adress");
    console.log(finduser);

    if (!finduser) {
      return res.send("user not found ");
    }

    // res.status(201).json({ data: finduser.populate("adress") });
    res.json({ data: finduser });
  } catch (error) {
    console.log(`error whli single user api ${error} `);
  }
};

export const adduseradress = async (req, res) => {
  try {
    const { loggedinuserid } = req.params;
    const { name, number, pincode, area, town, state } = req.body;
    const finduser = await User.findById(loggedinuserid);
    const saveadress = new Useradress({
      loggedinuserid,
      name,
      number,
      pincode,
      area,
      town,
      state,
    });
    await saveadress.save();
    finduser.adress.push(saveadress._id);

    await finduser.save();
    res.send(finduser);
  } catch (error) {
    console.log(`error in registering ${error}`);
  }
};

export const getsingleadress = async (req, res) => {
  const { loggedinuser } = req.params;
  const finduser = await Useradress.findOne({
    loggedinuserid: loggedinuser,
  });
  console.log(finduser);
  if (!finduser) {
    return res.send("user not found ");
  }
  res.status(201).json({ data: finduser });
};
