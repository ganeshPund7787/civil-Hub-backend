import { NextFunction, Request, Response } from "express";
import { CustomError } from "../utils/error.Handler";

export const errorMiddleware = (
  err: CustomError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err instanceof CustomError ? err.statusCode : 500;
  const message = err.message || "Internal server error";

  res.status(statusCode).json({
    success: false,
    message: message,
  });
};
