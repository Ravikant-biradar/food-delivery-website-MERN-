import express from "express";
import {  create_restorent,  } from "../controller/createrestorent.controller.js";

const create_restorent_route = express.Router();

create_restorent_route.post("/add-restorent-types/:loggedowner", create_restorent);


export default  create_restorent_route;