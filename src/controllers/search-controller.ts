import { Request, Response } from 'express';
import * as itemService from '../services/item-service';

const searchItems = async (request: Request, response: Response) => {
  try {
    const query = request.query.query as string;
    const foundedItems = await itemService.searchItemsByQuery(query);
    response.json(foundedItems);
  } catch (error) {
    return response.status(400).json('Search items error');
  }
};

const searchTags = async (request: Request, response: Response) => {
  try {
    const query = request.query.query as string;
    const foundedItems = await itemService.searchTagsByQuery(query);
    response.json(foundedItems);
  } catch (error) {
    return response.status(400).json('Search items error');
  }
};

export { searchItems, searchTags };
