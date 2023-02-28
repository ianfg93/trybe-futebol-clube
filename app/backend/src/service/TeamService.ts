import { ModelStatic } from 'sequelize';
import TeamModel from '../database/models/TeamModel';

export default class TeamService {
  protected teamModel: ModelStatic<TeamModel> = TeamModel;

  async getAllTeams():Promise<TeamModel[]> {
    const teams = await this.teamModel.findAll();
    return teams;
  }
}
