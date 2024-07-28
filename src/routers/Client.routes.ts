import express from "express";
import { CreateClient, UpdateClient } from "../controllers/Client.controller";
import { isAuthenticated } from "../../src/middleware/Auth.middleware";

const route = express.Router();

route.post("/register", CreateClient);
route.put("/update-client", isAuthenticated, UpdateClient);

export default route;
