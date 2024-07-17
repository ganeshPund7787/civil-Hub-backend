import express from "express";
import {
  addLanAndEducation,
  updateUser,
} from "../controllers/civilUser.controller";
import { isAutheticated } from "../middleware/Auth.middleware";

const route = express.Router();

route.put("/update/:id", isAutheticated, updateUser);
route.put("/addLanAndEducation/:id", addLanAndEducation);

export default route;
