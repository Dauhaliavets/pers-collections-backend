import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
import { ITokenPayload } from '../models/types/TokenPayload';
import { JwtPayload } from '../models/types/JwtPayload';

const generateAccessToken = (payload: JwtPayload): string => {
  return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '60m' });
};

const validateAccessToken = (token: string): Promise<ITokenPayload> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.SECRET_KEY, (error, decoded: ITokenPayload) => {
      if (error) return reject(error);
      resolve(decoded);
    });
  });
};

export { generateAccessToken, validateAccessToken };
