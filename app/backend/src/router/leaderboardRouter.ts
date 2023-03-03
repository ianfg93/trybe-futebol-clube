import { Router, Request, Response } from 'express';
import tokenValidation from '../middleware/token';
import LeaderboardController from '../controller/LeaderboardController';

const leaderboardController = new LeaderboardController();

const router = Router();

router.get(
  '/home',
  tokenValidation,
  (req: Request, res: Response) => leaderboardController.getLeaderBoard(req, res),
);

export default router;
