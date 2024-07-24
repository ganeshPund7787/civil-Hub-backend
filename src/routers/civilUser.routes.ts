import express from "express";
import {
  addLanAndEducation,
  AddProject,
  addSkillsAndWork,
  updateUser,
  UserAchivements,
} from "../controllers/civilUser.controller";
const route = express.Router();

route.put("/update", updateUser);
route.put("/addLanAndEducation", addLanAndEducation);
route.put("/addSkillsAndWork", addSkillsAndWork);
route.put("/addAchvements", UserAchivements);
route.put("/AddProject", AddProject);

export default route;
