import express from "express";

import {
  createPost,
  deletePost,
  GetPost,
  updatePost,
} from "../controllers/Post.controller";
import { isAuthenticated } from "../middleware/Auth.middleware";

const route = express.Router();

route.post("/create", isAuthenticated, createPost);
route.get("/get", isAuthenticated, GetPost);
route.put("/update/:postId", isAuthenticated, updatePost);
route.delete("/delete/:postId", isAuthenticated, deletePost);

export default route;
