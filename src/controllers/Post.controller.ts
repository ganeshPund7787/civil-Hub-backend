import { Request, Response, NextFunction } from "express";
import { Post } from "../models/post.model";
import { errorHandler } from "../utils/error.Handler";
import { Client } from "../models/Client.model";

export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req._id;
    let isPostExist;
    if (req.body.image) {
      isPostExist = await Post.findOne({ image: req.body.image });
      if (isPostExist) {
        return next(errorHandler(400, "Already Posted"));
      }
    }

    const newPost = new Post({ ...req.body, userId });

    if (req.body.image) {
      newPost.image = req.body.image;
    }

    await newPost.save();
    res.json(newPost);
  } catch (error) {
    next(error);
  }
};
