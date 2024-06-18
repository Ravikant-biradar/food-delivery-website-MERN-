import express from "express";
import {
  email_login_controller,
  email_reg_controller,
  logout_controller,
} from "../controller/emailregister.controller.js";
const emailregisterroute = express.Router();

emailregisterroute.post("/reg-restorent-by-email", email_reg_controller);
emailregisterroute.post("/login-check-by-email", email_login_controller);
emailregisterroute.get("/owner-logout", logout_controller);

export default emailregisterroute;
