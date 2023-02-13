import { Router } from 'express';
import * as collectionController from '../controllers/collection-controller';
import { roleMiddleware } from '../middlewares/roleMiddleware';

const collectionRouter = Router();

collectionRouter.get('/', collectionController.getCollections);
collectionRouter.get('/ownerId/:id', collectionController.getCollectionsByUser);
collectionRouter.get('/:id', collectionController.getCollection);
collectionRouter.post('/', roleMiddleware(['ADMIN', 'USER']), collectionController.createCollection);
collectionRouter.delete('/:id', roleMiddleware(['ADMIN', 'USER']), collectionController.deleteCollection);
collectionRouter.patch('/:id', roleMiddleware(['ADMIN', 'USER']), collectionController.updateCollection);

export { collectionRouter };
