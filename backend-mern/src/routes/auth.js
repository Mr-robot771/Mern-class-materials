import { Router } from "express";
import { loginUser } from "../controller/auth.js";

const router = Router();
router.post("/login", loginUser);

export default router;
