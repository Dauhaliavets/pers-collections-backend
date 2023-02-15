import { Schema, model } from 'mongoose';
import { commentSchema } from './Comment';
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
    comments: [commentSchema],
    likes: [String],
    extraFields: [extraFieldSchema],
  },
  { versionKey: false, strict: false, timestamps: { createdAt: true, updatedAt: false } },
);

const CollectionItem = model('item', collectionItemSchema);
export { CollectionItem };
