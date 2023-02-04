import { Router } from 'express';
import * as authController from '../controllers/auth-controller';

const authRouter = Router();

authRouter.post('/signIn', authController.login);
authRouter.post('/signUp', authController.registration);

export { authRouter };
