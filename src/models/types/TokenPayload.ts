import { TRole } from './RoleModel';

interface ITokenPayload {
  exp: number;
  iat: number;
  role: TRole;
  username: string;
  id: string;
}

export { ITokenPayload };
