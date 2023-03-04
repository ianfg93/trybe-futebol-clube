import { Router, Request, Response } from 'express';
import LeaderboardController from '../controller/LeaderboardController';

const router = Router();

router.get(
  '/home',
  (req: Request, res: Response) => LeaderboardController.getLeaderBoard(req, res),
);
router.get(
  '/away',
  (req: Request, res: Response) => LeaderboardController.getLeaderBoardAway(req, res),
);

export default router;
