import { NextFunction, RequestHandler, Request, Response } from 'express';
import { checkAccessToken } from '../services/token-service';

const isAuth: RequestHandler = (request: Request, response: Response, next: NextFunction) => {
  if (['/auth/signIn', '/auth/signUp'].includes(request.path)) {
    return next();
  }
  const authHeader = request.header('Authorization');
  if (authHeader) {
    const [type, token] = authHeader.split(' ');
    if (type === 'Bearer' && checkAccessToken(token)) {
      return next();
    }
  }
  return response.status(403).json({ message: 'Invalid token' });
};

export { isAuth };
