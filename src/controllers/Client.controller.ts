import { Request, Response, NextFunction } from "express";
import { Client } from "../models/Client.model";
import { errorHandler } from "../utils/error.Handler";
import bcryptjs from "bcryptjs";
import { CivilUser } from "../models/civilUser.model";

export const CreateClient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const isUserxist = await Client.findOne({ email: req.body.email });
    const isFrelancer = await CivilUser.findOne({ email: req.body.email });

    if (isUserxist) {
      return next(errorHandler(400, "Email already exist"));
    }

    if (isFrelancer) {
      return next(errorHandler(400, "Email already exist"));
    }

    const hashedPassword = bcryptjs.hashSync(req.body.password, 10);

    const newClient = new Client({
      ...req.body,
      password: hashedPassword,
    });

    await newClient.save();
    console.log(newClient);
    res.status(202).json({
      success: true,
      message: "Client register success",
    });
  } catch (error) {
    next(error);
  }
};
