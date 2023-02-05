import { Router } from 'express';
import * as userController from '../controllers/user-controller';
import { roleMiddleware } from '../middlewares/roleMiddleware';

const usersRouter = Router();

usersRouter.get('/', roleMiddleware(['ADMIN']), userController.getUsers);
usersRouter.get('/:id', roleMiddleware(['ADMIN']), userController.getUser);
usersRouter.delete('/:id', roleMiddleware(['ADMIN']), userController.deleteUser);
usersRouter.patch('/:id', roleMiddleware(['ADMIN']), userController.updateUser);

export { usersRouter };
