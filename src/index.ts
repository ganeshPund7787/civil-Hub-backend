import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import { errorMiddleware } from "./middleware/error.mddleware";
import "dotenv/config";

import civilRouter from "./routers/civilUserAuth.routes";
import civilUserRouter from "./routers/civilUser.routes";

import ClientRouter from "./routers/Client.routes";

import PostRouter from "./routers/post.routes";
import JobPostRouter from "./routers/jobPost.routes";

import MsgRoute from "./routers/message.routes";

import { app, server } from "./socket/socket";
import { isAuthenticated } from "./middleware/Auth.middleware";

mongoose
  .connect(process.env.MONGO_URI as string, { dbName: "civilHub" })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(`Error while database connection : ${err}`));

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", civilRouter);
app.use("/api/user", civilUserRouter);

app.use("/api/client", ClientRouter);

app.use("/api/post", PostRouter);
app.use("/api/job-post", JobPostRouter);

app.use("/api/message", isAuthenticated, MsgRoute);

app.use(errorMiddleware);
server.listen(process.env.PORT, () => {
  console.log(`Server is working on ${process.env.PORT}`);
});
