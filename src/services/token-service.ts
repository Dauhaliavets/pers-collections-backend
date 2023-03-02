import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
import { ITokenPayload } from '../models/types/TokenPayload';
import { JwtPayload } from '../models/types/JwtPayload';
import { OAuth2Client } from 'google-auth-library';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

export const generateAccessToken = (payload: JwtPayload): string => {
  return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '3d' });
};

export const validateAccessToken = (token: string): Promise<ITokenPayload> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.SECRET_KEY, (error, decoded: ITokenPayload) => {
      if (error) return reject(error);
      resolve(decoded);
    });
  });
};

export const verifyGoogleToken = async (token: string) => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: GOOGLE_CLIENT_ID,
    });
    return { payload: ticket.getPayload() };
  } catch (error) {
    return { error: 'Invalid user detected. Please try again' };
  }
};
