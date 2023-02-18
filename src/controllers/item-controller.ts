import { Request, Response } from 'express';
import * as itemService from '../services/item-service';

const getItems = async (_: Request, response: Response) => {
  try {
    const foundedItems = await itemService.findItems();
    response.json(foundedItems);
  } catch (error) {
    return response.status(400).json('Find Items error');
  }
};

const getItemsByCollectionId = async (request: Request, response: Response) => {
  try {
    const foundedItem = await itemService.findItemsByParams({ collectionId: request.params.id });
    response.json(foundedItem);
  } catch (error) {
    return response.status(400).json('Find Items by collectionId error');
  }
};

const getItemById = async (request: Request, response: Response) => {
  try {
    const foundedItem = await itemService.findItemById(request.params.id);
    response.json(foundedItem);
  } catch (error) {
    return response.status(400).json('Find Item by id error');
  }
};

const createItem = async (request: Request, response: Response) => {
  try {
    const newItem = await itemService.createItem(request.body);
    response.json(newItem);
  } catch (error) {
    return response.status(400).json('Create Item error');
  }
};

const deleteItemById = async (request: Request, response: Response) => {
  try {
    const deletedItem = await itemService.deleteItemById(request.params.id);
    response.json(deletedItem);
  } catch (error) {
    return response.status(400).json('Delete Item error');
  }
};

const updateItemById = async (request: Request, response: Response) => {
  try {
    const {
      body,
      params: { id },
    } = request;
    const updatedItem = await itemService.updateItemById(id, body);
    response.json(updatedItem);
  } catch (error) {
    return response.status(400).json('Update Item error');
  }
};

const addCommentToItem = async (request: Request, response: Response) => {
  try {
    const {
      body: comment,
      params: { id },
    } = request;

    const io = request.app.get('socket');

    const updatedItem = await itemService.updateCommentByItemId(id, comment);
    io.emit('new-comment', updatedItem);
    response.json(updatedItem);
  } catch (error) {
    return response.status(400).json('Create Item Comment error');
  }
};

export { getItems, getItemsByCollectionId, getItemById, createItem, deleteItemById, updateItemById, addCommentToItem };
