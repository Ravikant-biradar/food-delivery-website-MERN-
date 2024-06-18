import express from "express";
import {
  adduseradress,
  getsingleadress,
  getsingleapi,
  user_login_controller,
  usercontroller,
} from "../controller/user.controller.js";
const user_route = express.Router();

user_route.post("/user-register", usercontroller);
user_route.post("/user-login", user_login_controller);

// user adress routes
user_route.post("/add-user-adress/:loggedinuserid", adduseradress);
user_route.get("/get-single-user-adress/:loggedinuser", getsingleadress);

// 
user_route.get("/get-single-user/:loggedinuser", getsingleapi);

export default user_route;
