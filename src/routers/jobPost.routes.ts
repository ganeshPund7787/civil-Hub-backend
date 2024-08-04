import express from "express";
import { isAuthenticated } from "../middleware/Auth.middleware";
import { createJobPost } from "../controllers/jobPost.controller";

const routes = express.Router();

routes.post("/create", isAuthenticated, createJobPost);

export default routes;
