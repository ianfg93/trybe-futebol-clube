import { ModelStatic } from 'sequelize';
import UserModel from '../database/models/UserModel';

export default class LoginService {
  protected userModel: ModelStatic<UserModel> = UserModel;

  async login(email: string):Promise<UserModel[]> {
    const user = await this.userModel.findAll({ where: { email } });
    return user;
  }
}
