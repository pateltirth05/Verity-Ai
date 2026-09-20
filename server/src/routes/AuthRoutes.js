import express from "express";
import {register,login, getme} from "../controllers/AuthController.js";
import protect from "../middleware/AuthMiddleware.js";
const router=express.Router();

router.post("/register",register)
router.post("/login",login)
router.get("/me",protect,getme)
export default router;