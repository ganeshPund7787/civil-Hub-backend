import { Request, Response, NextFunction } from "express";
import { CivilUser } from "../models/civilUser.model";
import { errorHandler } from "../utils/error.Handler";

export const Register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const isUserExist = await CivilUser.findOne({ email: req.body.email });

    if (isUserExist) {
      return next(errorHandler(400, "email already exist"));
    }

    const newUser = new CivilUser(req.body);

    await newUser.save();

    res.status(202).json({
      success: true,
      message: "Account created",
    });
  } catch (error) {
    console.log(`Error while register : `, error);
    next(error);
  }
};
