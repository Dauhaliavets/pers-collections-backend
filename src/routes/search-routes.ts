import { Router } from 'express';
import * as searchController from '../controllers/search-controller';

const searchRouter = Router();

searchRouter.get('', searchController.searchItems);
searchRouter.get('/tag', searchController.searchTags);

export { searchRouter };
