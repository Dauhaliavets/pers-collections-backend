import { NextFunction, RequestHandler, Request, Response } from 'express';
import { TRole } from '../models/types/RoleModel';
import { validateAccessToken } from '../services/token-service';

const roleMiddleware = (roles: TRole[]) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    try {
      if (request.method === 'OPTIONS') {
        return next();
      }
      const authHeader = request.header('Authorization');
      if (authHeader) {
        const [type, token] = authHeader.split(' ');
        if (type !== 'Bearer') {
          return response.status(400).json({ message: "Header don't have type = Bearer" });
        }
        const { role } = await validateAccessToken(token);
        if (!roles.includes(role)) {
          return response.status(401).json({ message: 'No enough privileges to access' });
        }
        return next();
      }
      return response.status(403).json({ message: 'Missed header "Authorization"' });
    } catch (error) {
      return response.status(400).json({ message: `Bad request. Message: ${error.name}` });
    }
  };
};

export { roleMiddleware };
