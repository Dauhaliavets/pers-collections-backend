import { Request, Response } from 'express';
import { reshapingOptions } from '../constants';
import * as userService from '../services/user-service';

const getUsers = async (_: Request, response: Response) => {
  try {
    const foundedUsers = await userService.findUsers();
    response.json(foundedUsers.map((user) => user.toObject(reshapingOptions)));
  } catch (error) {
    return response.status(400).json('Find users error');
  }
};

const getUser = async (request: Request, response: Response) => {
  try {
    const foundedUser = await userService.findUserById(request.params.id);
    response.json(foundedUser.toObject(reshapingOptions));
  } catch (error) {
    return response.status(400).json('Find user by id error');
  }
};

const deleteUser = async (request: Request, response: Response) => {
  try {
    const deletedUser = await userService.deleteUserById(request.params.id);
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
    const updatedUser = await userService.updateUserById(id, body);
    response.json(updatedUser.toObject(reshapingOptions));
  } catch (error) {
    return response.status(400).json('Update user error');
  }
};

export { getUsers, getUser, deleteUser, updateUser };
