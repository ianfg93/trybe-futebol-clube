import { ModelStatic } from 'sequelize';
import bcrypt = require('bcryptjs');
import Jwt from '../utils/JWT';
import ILogin from '../interface/ILogin';
import IToken from '../interface/IToken';
import UserModel from '../database/models/UserModel';

export default class LoginService {
  protected userModel: ModelStatic<UserModel> = UserModel;

  async login({ email, password }: ILogin): Promise<IToken | undefined> {
    const userEmail = await this.userModel.findOne({ where: { email } });
    if (!userEmail) return undefined;

    const userPassword = bcrypt.compareSync(password, userEmail.password);
    if (!userPassword) return undefined;

    const token = Jwt.jwtConfig(email);
    return { token };
  }

  async loginRole(email: string): Promise<string | undefined> {
    const userEmail = await this.userModel.findOne({ where: { email } });
    if (!userEmail) return undefined;

    return userEmail.role;
  }
}
