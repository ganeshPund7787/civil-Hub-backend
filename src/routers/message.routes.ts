import express from "express";
import { sendMessage } from "../controllers/message.controller";

const route = express.Router();

route.post("/send/:id", sendMessage);

export default route;
