import { Router } from 'express';
import * as itemController from '../controllers/item-controller';
import { roleMiddleware } from '../middlewares/roleMiddleware';

const collectionItemsRouter = Router();

collectionItemsRouter.get('/', itemController.getItems);
collectionItemsRouter.get('/:id', itemController.getItemById);
collectionItemsRouter.get('/collectionId/:id', itemController.getItemsByCollectionId);
collectionItemsRouter.post('/', roleMiddleware(['ADMIN', 'USER']), itemController.createItem);
collectionItemsRouter.delete('/:id', roleMiddleware(['ADMIN', 'USER']), itemController.deleteItemById);
collectionItemsRouter.patch('/:id', roleMiddleware(['ADMIN', 'USER']), itemController.updateItemById);
collectionItemsRouter.post('/:id/comment', roleMiddleware(['ADMIN', 'USER']), itemController.addCommentToItem);

export { collectionItemsRouter };
