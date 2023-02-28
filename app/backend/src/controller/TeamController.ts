import { Request, Response } from 'express';
import TeamService from '../service/TeamService';

export default class TeamController {
  constructor(private teamService = new TeamService()) {}

  public async getAllTeams(_req: Request, res: Response):Promise<Response | void > {
    const teams = await this.teamService.getAllTeams();
    return res.status(200).json(teams);
  }

  public async getTeamsId(req: Request, res: Response):Promise<Response | void > {
    const { id } = req.params;
    const teams = await this.teamService.getTeamsId(Number(id));
    return res.status(200).json(teams);
  }
}
