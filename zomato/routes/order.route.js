import express from "express";
import { order_controller } from "../controller/order.controller.js";
const order_route = express.Router();

order_route.post("/order-food/:logeduser", order_controller);

export default order_route;
