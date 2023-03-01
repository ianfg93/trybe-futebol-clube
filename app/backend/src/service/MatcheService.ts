import { ModelStatic } from 'sequelize';
import MatcheModel from '../database/models/MatcheModel';
import TeamModel from '../database/models/TeamModel';

export default class LoginService {
  protected userModel: ModelStatic<MatcheModel> = MatcheModel;

  async getAllMatches(): Promise<MatcheModel[]> {
    const matches = await this.userModel.findAll({
      include: [
        { model: TeamModel, as: 'homeTeam', attributes: ['teamName'] },
        { model: TeamModel, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });
    return matches;
  }
}
