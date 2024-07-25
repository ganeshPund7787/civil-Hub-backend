import express from "express";
import { isAuthenticated } from "../middleware/Auth.middleware";
import { createPost } from "../controllers/Post.controller";

const route = express.Router();

route.post("/create", isAuthenticated, createPost);

export default route;
