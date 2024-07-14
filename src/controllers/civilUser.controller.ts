import { Request, Response, NextFunction } from "express";
import { CivilUser } from "../models/civilUser.model";
import { errorHandler } from "../utils/error.Handler";

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    let user = await CivilUser.findById(id);
    if (!user) {
      return next(errorHandler(400, "User does not exist"));
    }

    const updatedUser = await CivilUser.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};
