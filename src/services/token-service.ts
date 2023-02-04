import jwt from 'jsonwebtoken';
import { ITokenPayload } from '../models/types/TokenPayload';
import { SECRET_KEY } from '../constants';

const generateAccessToken = (id: string, username: string, role: string): string => {
  const payload = { id, username, role };

  return jwt.sign(payload, SECRET_KEY, { expiresIn: '60m' });
};

const validateAccessToken = (token: string): Promise<ITokenPayload> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET_KEY, (error, decoded: ITokenPayload) => {
      if (error) return reject(error);
      resolve(decoded);
    });
  });
};

export { generateAccessToken, validateAccessToken };
