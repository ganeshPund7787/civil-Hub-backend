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

export const addLanAndEducation = async (
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

    if (req.body.language) {
      const { language } = req.body;

      if (user.languages.includes(language)) {
        return next(errorHandler(404, "Already added"));
      }
      user.languages.push(language);

      await user.save();

      const finalUser = await CivilUser.findById(id).select("-password");
      return res.status(200).json(finalUser);
    } else {
      user.education.push(req.body);
      await user.save();

      const finalUser = await CivilUser.findById(id).select("-password");

      return res.status(200).json(finalUser);
    }
  } catch (error) {
    next(error);
  }
};

export const addSkillsAndWork = async (
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

    if (req.body.skill) {
      user.skills.push(req.body.skill);
      await user.save();

      const finalUser = await CivilUser.findById(id).select("-password");
      return res.status(200).json(finalUser);
    } else {
      console.log(req.body);
      user.workExperience.push(req.body);
      await user.save();

      const finalUser = await CivilUser.findById(id).select("-password");
      return res.status(200).json(finalUser);
    }
  } catch (error) {
    next(error);
  }
};
