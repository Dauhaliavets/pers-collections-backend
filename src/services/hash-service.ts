import bcrypt from 'bcrypt';

const hashPassword = (password: string): Promise<string> => {
  return bcrypt.hash(password, 10);
};

const checkPassword = (password: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};

export { hashPassword, checkPassword };
