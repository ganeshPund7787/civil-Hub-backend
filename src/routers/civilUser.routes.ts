import express from "express";
import { addLanguage, updateUser } from "../controllers/civilUser.controller";
import { isAutheticated } from "../middleware/Auth.middleware";

const route = express.Router();

route.put("/update/:id", isAutheticated, updateUser);
route.put("/addLanguage/:id", addLanguage);

export default route;
