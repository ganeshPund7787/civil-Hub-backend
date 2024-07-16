import { NextFunction, Request, Response } from "express";

export const isAutheticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { cookie } = req.cookies;
  console.log(cookie);
  next();
};
