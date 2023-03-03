import { Request, Response } from 'express';
import MatcheService from '../service/MatcheService';

export default class TeamController {
  constructor(private matcheService = new MatcheService()) { }

  public async getAllMatches(req: Request, res: Response) {
    const { inProgress } = req.query;
    const matches = await this.matcheService.getAllMatches(inProgress);
    return res.status(200).json(matches);
  }

  public async finish(req: Request, res: Response):Promise<Response | void > {
    const { id } = req.params;
    await this.matcheService.finish(Number(id));
    return res.status(200).json({ message: 'Finished' });
  }
}
