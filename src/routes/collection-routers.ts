import { Router } from 'express';
import * as collectionController from '../controllers/collection-controller';
import { roleMiddleware } from '../middlewares/roleMiddleware';

const collectionRouter = Router();

collectionRouter.get('/', roleMiddleware(['ADMIN', 'USER']), collectionController.getCollections);
collectionRouter.get('/:id', roleMiddleware(['ADMIN', 'USER']), collectionController.getCollection);
collectionRouter.delete('/:id', roleMiddleware(['ADMIN', 'USER']), collectionController.deleteCollection);
collectionRouter.patch('/:id', roleMiddleware(['ADMIN', 'USER']), collectionController.updateCollection);

export { collectionRouter };
