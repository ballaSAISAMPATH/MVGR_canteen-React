import { Router } from "express";
const router = Router();
import { AdminLogin } from "../../controllers/Admin/AdminLoginController.js";
router.post("/adminLogin",AdminLogin)

export default router;