import express from "express";
import { updateUser } from "../controllers/civilUser.controller";

const route = express.Router();

route.put("/update/:id", updateUser);

export default route;
