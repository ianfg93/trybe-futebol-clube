import jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET as string;

class generateToken {
  static jwtConfig(email: string) {
    return jwt.sign({ email }, TOKEN_SECRET);
  }
}

export default generateToken;
