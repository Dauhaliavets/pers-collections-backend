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

export const searchItemsByQuery = async (query: string) => {
  const foundedItems = await CollectionItem.aggregate()
    .search({
      index: 'itemsIndex',
      text: {
        query: query,
        path: ['title', 'tags', { value: 'extraFields.value' }, { value: 'comments.text' }],
      },
      highlight: {
        path: ['title', 'tags', 'extraFields.value', 'comments.text'],
      },
    })
    .project({
      _id: 1,
      collectionId: 1,
      title: 1,
      tags: 1,
      comments: 1,
      extraFields: 1,
      highlights: {
        $meta: 'searchHighlights',
      },
    });

  return foundedItems;
};

export const searchTagsByQuery = async (query: string) => {
  const foundedTags = await CollectionItem.aggregate()
    .search({
      index: 'tagsIndex',
      autocomplete: {
        query: query,
        path: 'tags',
        tokenOrder: 'any',
        fuzzy: {
          maxEdits: 1,
          maxExpansions: 10,
        },
      },
      highlight: {
        path: 'tags',
      },
    })
    .project({
      _id: 0,
      tags: 1,
      highlights: {
        $meta: 'searchHighlights',
      },
    });

  return foundedTags;
};
