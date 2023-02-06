import { Request, Response } from 'express';
import { reshapingOptions } from '../constants';
import { User } from '../models/schemas/User';
import { checkPassword, hashPassword } from '../services/hash-service';
import { generateAccessToken } from '../services/token-service';

const login = async (request: Request, response: Response) => {
  try {
    const { username, password } = request.body;
    const foundedUser = await User.findOne({ username });
    if (!foundedUser) {
      return response.status(400).json({ message: `Not found: User "${username}" is not found)` });
    }
    if (foundedUser.blockedStatus) {
      return response.status(400).json({ message: 'Forbidden: Access is Forbidden' });
    }
    const isValidPassword = await checkPassword(password, foundedUser.password);
    if (!isValidPassword) {
      return response.status(400).json({ message: 'Unauthorized: Incorrect password' });
    }

    const userPayload = {
      id: String(foundedUser._id),
      username: foundedUser.username,
      role: foundedUser.role,
    };

    const token = generateAccessToken(userPayload);

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
    const foundedUser = await User.findOne({ username });

    if (foundedUser) {
      return response.status(409).json({ message: `User ${username} already exists` });
    }

    const hash = await hashPassword(password);
    const user = new User({ username, email, password: hash });
    await user.save();

    const userPayload = {
      id: String(user._id),
      username: user.username,
      role: user.role,
    };

    const token = generateAccessToken(userPayload);

    return response.json({
      ...user.toObject(reshapingOptions),
      token,
    });
  } catch (error) {
    return response.status(400).json('Registration error');
  }
};

export { login, registration };
