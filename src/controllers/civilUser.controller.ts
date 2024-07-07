import { Request, Response, NextFunction } from "express";
import { CivilUser } from "../models/civilUser.model";

export const Register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const isUserExist = await CivilUser.findOne({ email: req.body.email });

    if (isUserExist) {
      return next();
    }
  } catch (error) {
    console.log(`Error while register : `, error);
    next(error);
  }
};
