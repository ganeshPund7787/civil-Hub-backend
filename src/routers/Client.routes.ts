import express from "express";
import { CreateClient } from "../controllers/Client.controller";

const route = express.Router();

route.post("/register", CreateClient);

export default route;
