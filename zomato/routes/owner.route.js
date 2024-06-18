import express from "express";
import { owner_controller } from "../controller/addrestobyowner.controller.js";

const owner_route = express.Router();

owner_route.post("/restorent-owner/:loggedinownerid", owner_controller);

export default owner_route;
