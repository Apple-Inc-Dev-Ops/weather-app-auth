import { Router } from "express";
import registerController from "../controllers/auth_controllers.js";

const authRouter = Router();

authRouter.post('/auth/register', registerController);

export default authRouter;