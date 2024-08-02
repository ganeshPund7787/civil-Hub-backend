import { NextFunction, Request, Response } from "express";
import { JobPost } from "../models/jobPost.model";
import { errorHandler } from "../utils/error.Handler";

export const createJobPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { heading } = req.body;
    const isPostExist = await JobPost.findOne({ heading });
    if (isPostExist) return next(errorHandler(400, "Post Already exist"));

    await JobPost.create({ ...req.body });

    res.status(202).json({
      message: "Post Create",
    });
  } catch (error) {
    next(error);
  }
};
