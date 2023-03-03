import { ModelStatic } from 'sequelize';
import MatcheModel from '../database/models/MatcheModel';
import TeamModel from '../database/models/TeamModel';

export default class LoginService {
  protected userModel: ModelStatic<MatcheModel> = MatcheModel;

  async getAllMatches(inProgress: unknown): Promise<MatcheModel[]> {
    const matches = await this.userModel.findAll({
      include: [
        { model: TeamModel, as: 'homeTeam', attributes: ['teamName'] },
        { model: TeamModel, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });
    if (inProgress === 'true') {
      return matches.filter((matche) => matche.inProgress === true);
    }
    if (inProgress === 'false') {
      return matches.filter((matche) => matche.inProgress === false);
    }
    return matches;
  }
}
