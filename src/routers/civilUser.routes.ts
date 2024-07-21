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

route.put("/update", updateUser);
route.put("/addLanAndEducation", addLanAndEducation);
route.put("/addSkillsAndWork", addSkillsAndWork);
route.put("/addCertification", AddUserCertificate);
route.put("/AddProject", AddProject);

export default route;
