import { Request, Response, NextFunction } from "express";
import { Client } from "../models/Client.model";
import { errorHandler } from "../utils/error.Handler";
import bcryptjs from "bcryptjs";

export const CreateClient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const isUserxist = await Client.findOne({ email: req.body.email });

    if (isUserxist) {
      return next(errorHandler(400, "Email already exist"));
    }

    req.body.password = bcryptjs.hashSync(req.body.password, 10);

    const newClient = new Client(req.body);
    await newClient.save();

    res.status(202).json({
      success: true,
      message: "Client register success",
    });
  } catch (error) {
    next(error);
  }
};
