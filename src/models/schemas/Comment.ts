import { model, Schema } from 'mongoose';

const commentSchema = new Schema({
  sender: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  createdDate: String,
});

const Comment = model('comment', commentSchema);

export { commentSchema, Comment };
