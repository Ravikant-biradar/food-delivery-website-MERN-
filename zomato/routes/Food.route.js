import express from "express";
import { food_controller } from "../controller/Food.controller.js";
const food_Route = express.Router();

food_Route.post("/add-your-foods/:restorent_id", food_controller);

export default food_Route;
