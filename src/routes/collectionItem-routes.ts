import { Router } from 'express';
import * as itemController from '../controllers/item-controller';
import { roleMiddleware } from '../middlewares/roleMiddleware';

const collectionItemsRouter = Router();

collectionItemsRouter.get('/', itemController.getItems);
collectionItemsRouter.get('/:id', itemController.getItem);
collectionItemsRouter.get('/collectionId/:id', itemController.getItemsByCollectionId);
collectionItemsRouter.post('/', roleMiddleware(['ADMIN', 'USER']), itemController.createItem);
collectionItemsRouter.delete('/:id', roleMiddleware(['ADMIN', 'USER']), itemController.deleteItem);
collectionItemsRouter.patch('/:id', roleMiddleware(['ADMIN', 'USER']), itemController.updateItem);

export { collectionItemsRouter };
