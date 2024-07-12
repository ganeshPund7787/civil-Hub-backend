import express from "express";
import { Login, logOut, Register } from "../controllers/civilUser.controller";

const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);
router.get("/logout", logOut);

export default router;
