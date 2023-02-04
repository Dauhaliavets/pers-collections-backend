import { Router } from 'express';
import * as userController from '../controllers/user-controller';
import { roleMiddleware } from '../middlewares/roleMiddleware';

const authRouter = Router();

authRouter.get('/users', roleMiddleware(['ADMIN']), userController.getUsers);
authRouter.get('/user/:id', roleMiddleware(['ADMIN']), userController.getUser);
authRouter.delete('/user/:id', roleMiddleware(['ADMIN']), userController.deleteUser);
authRouter.patch('/user/:id', roleMiddleware(['ADMIN']), userController.updateUser);

export { authRouter };
