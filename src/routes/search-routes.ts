import { Router } from 'express';
import * as searchController from '../controllers/search-controller';

const searchRouter = Router();

searchRouter.get('', searchController.searchItems);
searchRouter.get('/tags', searchController.searchTags);

export { searchRouter };
