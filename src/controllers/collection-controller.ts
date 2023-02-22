import { Request, Response } from 'express';
import * as collectionService from '../services/collection-service';

const getCollections = async (_: Request, response: Response) => {
  try {
    const foundedCollections = await collectionService.findCollections();
    response.json(foundedCollections);
  } catch (error) {
    return response.status(400).json('Find Collections error');
  }
};

const getCollectionsByUser = async (request: Request, response: Response) => {
  try {
    const foundedCollection = await collectionService.findCollectionByParams({ ownerId: request.params.id });
    response.json(foundedCollection);
  } catch (error) {
    return response.status(400).json('Find Collection by OWNER error');
  }
};

const getCollectionById = async (request: Request, response: Response) => {
  try {
    const foundedCollection = await collectionService.findCollectionById(request.params.id);
    response.json(foundedCollection);
  } catch (error) {
    return response.status(400).json('Find Collection by id error');
  }
};

const createCollection = async (request: Request, response: Response) => {
  try {
    const { ownerId, title, description, topic, imageUrl, extraFields } = request.body;
    const newCollection = await collectionService.createCollection({
      ownerId,
      title,
      description,
      topic,
      imageUrl,
      extraFields,
    });

    response.json(newCollection);
  } catch (error) {
    return response.status(400).json('Create Collection error');
  }
};

const deleteCollectionById = async (request: Request, response: Response) => {
  try {
    const deletedCollection = await collectionService.deleteCollectionById(request.params.id);
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
    const updatedCollection = await collectionService.updateCollectionById(id, body);
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
