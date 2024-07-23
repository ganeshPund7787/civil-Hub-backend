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
    const isCivilUser = await CivilUser.findOne({ email: req.body.email });
    console.log("Body: ", req.body);
    if (isUserxist || isCivilUser) {
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

export const UpdateClient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const ClientId = req._id;

    await Client.findByIdAndUpdate(
      ClientId,
      {
        $set: req.body,
      },
      { new: true }
    );
    const updatedClient = await Client.findById(ClientId);
    res.status(201).json(updatedClient);
  } catch (error) {
    console.log(`Error while backend : `, error);
    next(error);
  }
};
