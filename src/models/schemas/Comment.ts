import { model, Schema } from 'mongoose';

const commentSchema = new Schema(
  {
    sender: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: { createdAt: true, updatedAt: false } },
);

const Comment = model('comment', commentSchema);

export { commentSchema, Comment };
