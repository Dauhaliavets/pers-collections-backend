import { Request, Response } from 'express';
import { User } from '../models/User';
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

    const token = generateAccessToken(String(foundedUser._id), foundedUser.username, foundedUser.role);
    return response.status(200).json({ token });
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

    return response.json({ message: 'User created' });
  } catch (error) {
    return response.status(400).json('Registration error');
  }
};

const check = async (request: Request, response: Response) => {
  try {
    response.json('SERVER WORK');
  } catch (error) {}
};

export { login, registration, check };
