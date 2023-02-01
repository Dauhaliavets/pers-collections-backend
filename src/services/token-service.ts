import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../constants';

const generateAccessToken = (id: string, username: string, role: string) => {
  const payload = { id, username, role };

  return jwt.sign(payload, SECRET_KEY, { expiresIn: '60m' });
};

const checkAccessToken = (token: string) => {
  try {
    jwt.verify(token, SECRET_KEY);
    return true;
  } catch (error) {
    return false;
  }
};

export { generateAccessToken, checkAccessToken };
