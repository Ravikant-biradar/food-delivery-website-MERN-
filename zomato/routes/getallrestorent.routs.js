import  express  from "express";
import { getallrestorents_controller } from "../controller/getallrestorents.controller.js";

const getall_restorents_route = express.Router();

getall_restorents_route.get("/get-all-restorents", getallrestorents_controller);

export default getall_restorents_route;
