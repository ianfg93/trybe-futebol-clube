import { Request, Response } from 'express';
import LeaderboardService from '../service/LeaderboardService';

export default class TeamController {
  constructor(private leaderboardService = new LeaderboardService()) { }

  public async getLeaderBoard(req: Request, res: Response) {
    const leaderboard = await this.leaderboardService.getLeaderBoard();
    return res.status(200).json(leaderboard);
  }
}
