import { Schema, model } from 'mongoose';

const collectionItemSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    collectionId: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
    },
    tags: {
      type: [String],
    },
  },
  { versionKey: false },
);

const CollectionItem = model('items', collectionItemSchema);
export { CollectionItem };
