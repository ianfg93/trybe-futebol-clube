// const crypto = require('crypto');
import { NextFunction, Response, Request } from 'express';
// import LoginService from '../service/LoginService';

// const myKey = () => crypto.randomBytes(8).toString('hex');

const validate = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const emailIsValid = /\S+@\S+\.\S+/;
  if (!email || !password) {
    return res.status(400).send({ message: 'All fields must be filled' });
  }
  if (!emailIsValid.test(email) || password.length < 6) {
    return res.status(401).send({
      message: 'Invalid email or password',
    });
  }
  next();
};

export default validate;
