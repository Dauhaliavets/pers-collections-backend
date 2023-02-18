import { Request, Response } from 'express';
import { reshapingOptions } from '../constants';
import * as userService from '../services/user-service';
import * as hashService from '../services/hash-service';
import * as tokenService from '../services/token-service';

const login = async (request: Request, response: Response) => {
  try {
    const { username, password } = request.body;
    const foundedUser = await userService.findOneUser({ username });
    if (!foundedUser) {
      return response.status(400).json({ message: `Not found: User "${username}" is not found)` });
    }
    if (foundedUser.blockedStatus) {
      return response.status(400).json({ message: 'Forbidden: Access is Forbidden' });
    }
    const isValidPassword = await hashService.checkPassword(password, foundedUser.password);
    if (!isValidPassword) {
      return response.status(400).json({ message: 'Unauthorized: Incorrect password' });
    }

    const userPayload = {
      id: String(foundedUser._id),
      username: foundedUser.username,
      role: foundedUser.role,
    };

    const token = tokenService.generateAccessToken(userPayload);

    return response.json({
      ...foundedUser.toObject(reshapingOptions),
      token,
    });
  } catch (error) {
    return response.status(400).json('Login error');
  }
};

const registration = async (request: Request, response: Response) => {
  try {
    const { username, email, password } = request.body;
    const foundedUser = await userService.findOneUser({ username });

    if (foundedUser) {
      return response.status(409).json({ message: `User ${username} already exists` });
    }

    const hash = await hashService.hashPassword(password);
    const user = await userService.createUser({ username, email, password: hash });

    const userPayload = {
      id: String(user._id),
      username: user.username,
      role: user.role,
    };

    const token = tokenService.generateAccessToken(userPayload);

    return response.json({
      ...user.toObject(reshapingOptions),
      token,
    });
  } catch (error) {
    return response.status(400).json('Registration error');
  }
};

export { login, registration };
