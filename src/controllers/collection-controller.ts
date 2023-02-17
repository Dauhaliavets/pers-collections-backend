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

const getCollectionsByUser = async (request: Request, response: Response) => {
  try {
    const ownerId = request.params.id;
    const foundedCollection = await Collection.find({ ownerId });
    response.json(foundedCollection);
  } catch (error) {
    return response.status(400).json('Find Collection by OWNER error');
  }
};

const getCollectionById = async (request: Request, response: Response) => {
  try {
    const id = request.params.id;
    const foundedCollection = await Collection.findById(id);
    response.json(foundedCollection);
  } catch (error) {
    return response.status(400).json('Find Collection by id error');
  }
};

const createCollection = async (request: Request, response: Response) => {
  try {
    const newCollection = new Collection(request.body);
    await newCollection.save();
    response.json(newCollection);
  } catch (error) {
    return response.status(400).json('Create Collection error');
  }
};

const deleteCollectionById = async (request: Request, response: Response) => {
  try {
    const id = request.params.id;
    const deletedCollection = await Collection.findByIdAndDelete(id);
    response.json(deletedCollection);
  } catch (error) {
    return response.status(400).json('Delete Collection error');
  }
};

const updateCollectionById = async (request: Request, response: Response) => {
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

export {
  getCollections,
  getCollectionsByUser,
  getCollectionById,
  createCollection,
  deleteCollectionById,
  updateCollectionById,
};
