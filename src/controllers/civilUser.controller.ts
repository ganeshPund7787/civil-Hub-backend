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

    await CivilUser.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    const updatedUser = await CivilUser.findById(id);

    return res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const addLanguage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { language } = req.body;
    let user = await CivilUser.findById(id);
    if (!user) {
      return next(errorHandler(400, "User does not exist"));
    }
    user.languages.push(language);
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
