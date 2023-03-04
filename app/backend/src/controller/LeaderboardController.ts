import { Request, Response } from 'express';
import LeaderBoardHomeService from '../service/LeaderboardService';
import LeaderBoardAwayService from '../service/LeaderboardAwayService';

export default class LeaderBoardController {
  static async getLeaderBoard(req: Request, res: Response) {
    const LeaderBoardHome = await LeaderBoardHomeService.getLeaderBoard();
    res.status(200).json(LeaderBoardHome);
  }

  static async getLeaderBoardAway(req: Request, res: Response) {
    const LeaderBoardAway = await LeaderBoardAwayService.getLeaderBoard();
    res.status(200).json(LeaderBoardAway);
  }
}
