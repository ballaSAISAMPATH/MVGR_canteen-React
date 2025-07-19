import { Router } from "express";
import { ClientLogin } from "../../controllers/Client/ClientLoginController.js";
import { ClientSignUp } from "../../controllers/Client/ClientSignUpController.js";
const router = Router();


router.post("/signup",ClientSignUp);

router.post("/clientLogin",ClientLogin)

export default router;