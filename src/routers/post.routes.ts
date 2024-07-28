import express from "express";
import { isAuthenticated } from "../../src/middleware/Auth.middleware";
import { createPost, GetPost } from "../controllers/Post.controller";

const route = express.Router();

route.post("/create", isAuthenticated, createPost);
route.get("/get", isAuthenticated, GetPost);

export default route;
