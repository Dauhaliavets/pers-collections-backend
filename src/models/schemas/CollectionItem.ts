import { Schema, model } from 'mongoose';
import { extraFieldSchema } from './ExtraField';

const collectionItemSchema = new Schema(
  {
    collectionId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    comments: [String],
    likes: [String],
    extraFields: [extraFieldSchema],
  },
  { versionKey: false, strict: false },
);

const CollectionItem = model('item', collectionItemSchema);
export { CollectionItem };
