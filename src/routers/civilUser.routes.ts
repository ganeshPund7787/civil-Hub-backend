import express from "express";
import {
  addLanAndEducation,
  AddProject,
  addSkillsAndWork,
  AddUserCertificate,
  updateUser,
} from "../controllers/civilUser.controller";
import { isAuthenticated } from "../middleware/Auth.middleware";

const route = express.Router();

route.put("/update/:id", updateUser);
route.put("/addLanAndEducation/:id", addLanAndEducation);
route.put("/addSkillsAndWork/:id", addSkillsAndWork);
route.put("/addCertification/:id", AddUserCertificate);
route.put("/AddProject/:id", AddProject);

export default route;
