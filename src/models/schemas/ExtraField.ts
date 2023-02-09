import { Schema } from 'mongoose';

const extraFieldSchema = new Schema({
  id: String,
  type: String,
  label: String,
  value: Schema.Types.Mixed,
  visible: Boolean,
});

export { extraFieldSchema };
