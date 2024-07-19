import express from "express";
import {
  addLanAndEducation,
  addSkillsAndWork,
  AddUserCertificate,
  updateUser,
} from "../controllers/civilUser.controller";
import { isAutheticated } from "../middleware/Auth.middleware";

const route = express.Router();

route.put("/update/:id", isAutheticated, updateUser);
route.put("/addLanAndEducation/:id", addLanAndEducation);
route.put("/addSkillsAndWork/:id", addSkillsAndWork);
route.put("/addCertification/:id", AddUserCertificate);

export default route;
