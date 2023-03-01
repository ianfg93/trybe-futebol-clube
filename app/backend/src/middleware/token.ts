import { NextFunction, Response, Request } from 'express';
import Jwt from '../utils/JWT';

const tokenValidation = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send({ message: 'Token not found' });
  }
  try {
    res.locals.token = Jwt.jwtVerif(token);
  } catch (error) {
    return res.status(401).send({ message: 'Token must be a valid token' });
  }
  next();
};

export default tokenValidation;
