import { Schema, model } from 'mongoose';

const collectionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  ownerId: {
    type: String,
    required: true,
  },
});

const Collection = model('collection', collectionSchema);
export { Collection };
