import { Schema, model } from 'mongoose';
import { extraFieldSchema } from './ExtraField';

const collectionSchema = new Schema(
  {
    ownerId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    extraFields: [extraFieldSchema],
  },
  { versionKey: false },
);

const Collection = model('collection', collectionSchema);
export { Collection };
