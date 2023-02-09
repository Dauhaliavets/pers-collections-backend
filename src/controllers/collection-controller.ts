import { Request, Response } from 'express';
import { Collection } from '../models/schemas/Collection';

const getCollections = async (_: Request, response: Response) => {
  try {
    const foundedCollections = await Collection.find({});
    response.json(foundedCollections);
  } catch (error) {
    return response.status(400).json('Find Collections error');
  }
};

const getCollection = async (request: Request, response: Response) => {
  try {
    const id = request.params.id;
    const foundedCollection = await Collection.findById(id);
    response.json(foundedCollection);
  } catch (error) {
    return response.status(400).json('Find Collection by id error');
  }
};

const deleteCollection = async (request: Request, response: Response) => {
  try {
    const id = request.params.id;
    const deletedCollection = await Collection.findByIdAndDelete(id);
    response.json(deletedCollection);
  } catch (error) {
    return response.status(400).json('Delete Collection error');
  }
};

const updateCollection = async (request: Request, response: Response) => {
  try {
    const {
      body,
      params: { id },
    } = request;
    const updatedCollection = await Collection.findByIdAndUpdate(id, body, { new: true });
    response.json(updatedCollection);
  } catch (error) {
    return response.status(400).json('Update Collection error');
  }
};

export { getCollections, getCollection, deleteCollection, updateCollection };
