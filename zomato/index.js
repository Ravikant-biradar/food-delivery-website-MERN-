import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

import cors from "cors";
app.use(
  cors({
    origin: "http://localhost:3001", // Replace with your frontend domain
    credentials: true, // Allow cookies to be sent
  })
);

import cookieParser from "cookie-parser";
app.use(cookieParser());

const port = process.env.PORT;
import connectDatabase from "./database.js";

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes paths
import owner_route from "./routes/owner.route.js";
import user_route from "./routes/user.route.js";
import order_route from "./routes/order.route.js";
import create_restorent_route from "./routes/createrestorent.route.js";
import emailregisterroute from "./routes/emailregister.route.js";
import getall_restorents_route from "./routes/getallrestorent.routs.js";
import food_Route from "./routes/Food.route.js";

// api
app.use("/api/create", owner_route);
app.use("/api/v1", create_restorent_route);
app.use("/api/v1", user_route);
app.use("/api/v1", order_route);
app.use("api/v1", user_route);
app.use("/api/v1", owner_route);
app.use("/api/v1", create_restorent_route);
app.use("/api/v1", emailregisterroute);
app.use("/api/v1", emailregisterroute);
app.use("/api/v1", emailregisterroute);
app.use("/api/v1", getall_restorents_route);
app.use("/api/v1", food_Route);
app.use("/api/v1", user_route);
app.use("api/v1", user_route);
app.use("api/v1", user_route);

// db and server
app.listen(port, () => {
  connectDatabase();
  console.log(`server listening on port : ${port}`);
});
