import bcrypt from "bcrypt";
import JsonWebToken from "jsonwebtoken";
import { Emailregister } from "../model/email.model.js";

export const email_reg_controller = async (req, res) => {
  try {
    const { name, email, number, password } = req.body;
    const checkusermail = await Emailregister.findOne({ email });
    if (checkusermail) {
      return res.send(`email already registered babu`);
    }
    const hasppassword = await bcrypt.hash(password, 10);
    const registeremail = new Emailregister({
      name: name,
      email: email,
      number: number,
      password: hasppassword,
    });
    await registeremail.save();
    console.log(registeremail);
    res.status(200).json({ mes: "Successfully Registered...", success: true });
  } catch (error) {
    console.log(`error while email registrstion ${error}`);
  }
};

export const email_login_controller = async (req, res) => {
  const { email, password } = req.body;
  const checkmail = await Emailregister.findOne({ email });
  if (!checkmail) {
    return res.send("email doesnot exists plz register urself");
  }
  const checkpassword = await bcrypt.compare(password, checkmail.password);
  if (!checkpassword) {
    return res.send(`internal server error plz try again...`);
  }

  // generate token ......
  const ownerid = checkmail._id;
  const token = await JsonWebToken.sign({ ownerid }, process.env.TOKEN, {
    expiresIn: "7D",
  });
  console.log(`token ${token}`);
  res.cookie("token", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
    httpOnly: true,
    secure: false, // For development on localhost
    sameSite: "None", // 'Lax' is usually sufficient for development
  });
  return res
    .status(200)
    .json({ mes: `  ${checkmail.name}`, success: true, ownerdata: checkmail });
};

export const logout_controller = async (req, res) => {
  return res.cookie("token", "").json({ mes: "logged out suceessfully" });
};
