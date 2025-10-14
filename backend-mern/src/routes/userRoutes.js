import { Router } from "express";
import { registerUser,getAllUser,getUser,deleteUser,updateUser } from "../controller/userController.js";

const router = Router();

router.post("/", registerUser);
router.get("/",getAllUser);
router.get("/:id",getUser);
router.delete("/:id",deleteUser);
router.patch("/:id",updateUser)

export default router;
