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

  async finish(id: number):Promise<void> {
    await this.userModel.findByPk(id);
    await this.userModel.update({ inProgress: false }, { where: { id } });
  }

  async update(id: number, homeTeamGoals: number, awayTeamGoals: number):Promise<number[] |
  undefined> {
    return this.userModel.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
  }
}
