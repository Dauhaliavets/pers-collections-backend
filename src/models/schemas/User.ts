import { Schema, model } from 'mongoose';
import { Roles } from '../types/RoleModel';

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: String,
    blockedStatus: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      default: Roles.User,
    },
  },
  { versionKey: false },
);

const User = model('user', userSchema);
export { User };
