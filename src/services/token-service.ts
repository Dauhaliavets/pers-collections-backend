import jwt from 'jsonwebtoken';
import { ITokenPayload } from '../models/types/TokenPayload';
import { SECRET_KEY } from '../constants';
import { JwtPayload } from '../models/types/JwtPayload';

const generateAccessToken = (payload: JwtPayload): string => {
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
