import { Router } from 'express';
import * as authController from '../controllers/auth-controller';
import { isAuth } from '../middlewares/isAuth';

const authRouter = Router();

authRouter.post('/signIn', authController.login);
authRouter.post('/signUp', authController.registration);
authRouter.get('/check', isAuth, authController.check);

export { authRouter };
