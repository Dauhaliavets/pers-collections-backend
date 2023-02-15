import { Schema } from 'mongoose';

const commentSchema = new Schema(
  {
    itemId: {
      type: String,
      required: true,
    },
    sender: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, strict: false, timestamps: { createdAt: true, updatedAt: false } },
);

export { commentSchema };
