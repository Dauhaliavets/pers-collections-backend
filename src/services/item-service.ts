import { CollectionItem } from '../models/schemas/CollectionItem';
import { ObjectId } from 'mongodb';

export const createItem = async (params: any) => {
  const newItem = new CollectionItem(params);
  await newItem.save();
  return newItem;
};

export const findItems = () => {
  return CollectionItem.find({});
};

export const findItemsByParams = (params: any) => {
  return CollectionItem.find(params);
};

export const findItemById = (id: string) => {
  return CollectionItem.findById(id);
};

export const deleteItemById = (id: string) => {
  return CollectionItem.findByIdAndDelete(id);
};

export const deleteItemsByParams = async (params: any) => {
  const items = await findItemsByParams(params);

  for (const item of items) {
    await deleteItemById(item._id.toString());
  }
};

export const updateItemById = (id: string, newBody: any) => {
  return CollectionItem.findByIdAndUpdate(id, newBody, { new: true });
};

export const updateCommentByItemId = (id: string, newComment: any) => {
  return CollectionItem.findByIdAndUpdate(
    id,
    { $push: { comments: newComment } },
    {
      new: true,
    },
  );
};
