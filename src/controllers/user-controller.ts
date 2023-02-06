import { Request, Response } from 'express';
import { reshapingOptions } from '../constants';
import { User } from '../models/schemas/User';

const getUsers = async (_: Request, response: Response) => {
  try {
    const foundedUsers = await User.find({});
    response.json(foundedUsers.map((user) => user.toObject(reshapingOptions)));
  } catch (error) {
    return response.status(400).json('Find users error');
  }
};

const getUser = async (request: Request, response: Response) => {
  try {
    const id = request.params.id;
    const foundedUser = await User.findById(id);
    response.json(foundedUser.toObject(reshapingOptions));
  } catch (error) {
    return response.status(400).json('Find user by id error');
  }
};

const deleteUser = async (request: Request, response: Response) => {
  try {
    const id = request.params.id;
    const deletedUser = await User.findByIdAndDelete(id);
    response.json(deletedUser.toObject(reshapingOptions));
  } catch (error) {
    return response.status(400).json('Delete user error');
  }
};

const updateUser = async (request: Request, response: Response) => {
  try {
    const {
      body,
      params: { id },
    } = request;
    const updatedUser = await User.findByIdAndUpdate(id, body);
    response.json(updatedUser.toObject(reshapingOptions));
  } catch (error) {
    return response.status(400).json('Update user error');
  }
};

export { getUsers, getUser, deleteUser, updateUser };
