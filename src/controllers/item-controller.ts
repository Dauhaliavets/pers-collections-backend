import { Request, Response } from 'express';
import { CollectionItem } from '../models/schemas/CollectionItem';

const getItems = async (_: Request, response: Response) => {
  try {
    const foundedItems = await CollectionItem.find({});
    response.json(foundedItems);
  } catch (error) {
    return response.status(400).json('Find Items error');
  }
};

const getItemsByCollectionId = async (request: Request, response: Response) => {
  try {
    const collectionId = request.params.id;
    const foundedItem = await CollectionItem.find({ collectionId });
    response.json(foundedItem);
  } catch (error) {
    return response.status(400).json('Find Items by collectionId error');
  }
};

const getItem = async (request: Request, response: Response) => {
  try {
    const id = request.params.id;
    const foundedItem = await CollectionItem.findById({ _id: id });
    response.json(foundedItem);
  } catch (error) {
    return response.status(400).json('Find Item by id error');
  }
};

const createItem = async (request: Request, response: Response) => {
  try {
    const newItem = new CollectionItem(request.body);
    await newItem.save();
    response.json(newItem);
  } catch (error) {
    return response.status(400).json('Create Item error');
  }
};

const deleteItem = async (request: Request, response: Response) => {
  try {
    const id = request.params.id;
    const deletedItem = await CollectionItem.findByIdAndDelete({ _id: id });
    response.json(deletedItem);
  } catch (error) {
    return response.status(400).json('Delete Item error');
  }
};

const updateItem = async (request: Request, response: Response) => {
  try {
    const {
      body,
      params: { id },
    } = request;
    const updatedItem = await CollectionItem.findByIdAndUpdate(id, body, { new: true });
    response.json(updatedItem);
  } catch (error) {
    return response.status(400).json('Update Item error');
  }
};

const addCommentToItem = async (request: Request, response: Response) => {
  try {
    const {
      body,
      params: { id },
    } = request;

    const io = request.app.get('socket');

    const updatedItem = await CollectionItem.findByIdAndUpdate(
      id,
      { $push: { comments: body } },
      {
        new: true,
      },
    );
    io.emit('new-comment', updatedItem);
    response.json(updatedItem);
  } catch (error) {
    return response.status(400).json('Create Item Comment error');
  }
};

export { getItems, getItemsByCollectionId, getItem, createItem, deleteItem, updateItem, addCommentToItem };
