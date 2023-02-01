import { Schema, model } from 'mongoose';

enum Roles {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

const userSchema = new Schema({
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
  password: {
    type: String,
    required: true,
  },
  blockedStatus: Boolean,
  role: {
    type: String,
    default: Roles.USER,
  },
});

const User = model('user', userSchema);
export { User, Roles };
