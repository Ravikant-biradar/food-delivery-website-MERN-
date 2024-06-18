import jwt from "jsonwebtoken";
import dotenv from "dotenv";
// import hello from '../Config/../.env'

dotenv.config({ path: "../config/.env" });

const checkauthorised = async (req, res, next) => {
  try {
    console.log(`req.cookies${req.cookies}`);
    const { token } = req.cookies;
    console.log(`ur token is here ${token}`);
    if (!token) {
      return res.send("user not authorised");
    }
    const varifytoken = await jwt.verify(token, process.env.TOKEN);

    console.log(varifytoken);
    if (!varifytoken) {
      return res.send("something went wrong...");
    }

    next();
  } catch (error) {
    console.log(`error while authorization ${error}`);
  }
};

export default checkauthorised;
