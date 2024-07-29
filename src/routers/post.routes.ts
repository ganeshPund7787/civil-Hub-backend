import express from "express";

import { createPost, GetPost } from "../controllers/Post.controller";
import { isAuthenticated } from "../middleware/Auth.middleware";

const route = express.Router();

route.post("/create", isAuthenticated, createPost);
route.get("/get", isAuthenticated, GetPost);

export default route;
