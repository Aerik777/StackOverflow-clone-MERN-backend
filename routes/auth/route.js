import { Router } from "express";
import { registerUser, loginUser } from "./controller.js";

const router = Router();

// User routes
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
