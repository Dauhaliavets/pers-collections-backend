import { User } from '../models/schemas/User';
import * as collectionService from './collection-service';

export const createUser = async (params: any) => {
  const newUser = new User(params);
  await newUser.save();
  return newUser;
};

export const findOneUser = (params: any) => {
  return User.findOne(params);
};

export const findUsers = () => {
  return User.find({});
};

export const findUserById = (id: string) => {
  return User.findById(id);
};

export const deleteUserById = async (id: string) => {
  await collectionService.deleteCollectionsByParams({ ownerId: id });
  return User.findByIdAndDelete(id);
};

export const updateUserById = (id: string, newBody: any) => {
  return User.findByIdAndUpdate(id, newBody, { new: true });
};
