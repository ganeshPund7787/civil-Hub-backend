import express from "express";
import { isAuthenticated } from "../middleware/Auth.middleware";
import {
  createJobPost,
  getClientPost,
} from "../controllers/jobPost.controller";

const routes = express.Router();

routes.post("/create", isAuthenticated, createJobPost);
routes.get("/", isAuthenticated, getClientPost);

export default routes;
