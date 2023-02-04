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
    const { role } = foundedUser;
    return response.json({ username, role, token });
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

    const token = generateAccessToken(String(foundedUser._id), foundedUser.username, foundedUser.role);
    const { role } = foundedUser;
    return response.json({ username, role, token });
  } catch (error) {
    return response.status(400).json('Registration error');
  }
};

export { login, registration };
