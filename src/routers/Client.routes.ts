import express from "express";
import {
  CreateClient,
  getClient,
  UpdateClient,
} from "../controllers/Client.controller";
import { isAuthenticated } from "../middleware/Auth.middleware";

const route = express.Router();

route.post("/register", CreateClient);
route.put("/update-client", isAuthenticated, UpdateClient);
route.get("/:id", getClient);

export default route;
