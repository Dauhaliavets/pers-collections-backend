import { Collection } from '../models/schemas/Collection';
import * as itemService from './item-service';

export const createCollection = async (params: any) => {
  const newCollection = new Collection(params);
  await newCollection.save();
  return newCollection;
};

export const findCollections = () => {
  return Collection.find({});
};

export const findCollectionByParams = (params: any) => {
  return Collection.find(params);
};

export const findCollectionById = (id: string) => {
  return Collection.findById(id);
};

export const deleteCollectionById = (id: string) => {
  return Collection.findByIdAndDelete(id);
};

export const deleteCollectionsByParams = async (params: any) => {
  const collections = await findCollectionByParams(params);

  for (const collection of collections) {
    const collectionId = collection._id.toString();
    itemService.deleteItemsByParams({ collectionId });
    deleteCollectionById(collectionId);
  }
};

export const updateCollectionById = (id: string, newBody: any) => {
  return Collection.findByIdAndUpdate(id, newBody, { new: true });
};
