import jwt = require('jsonwebtoken');
import { SignOptions } from 'jsonwebtoken';
import 'dotenv/config';

const TOKEN_SECRET = process.env.JWT_SECRET as string;

const generateToken = (payload: unknown) => {
  const jwtConfig: SignOptions = {
    algorithm: 'HS256',
  };
  return jwt.sign({ payload }, TOKEN_SECRET, jwtConfig);
};

export default generateToken;
