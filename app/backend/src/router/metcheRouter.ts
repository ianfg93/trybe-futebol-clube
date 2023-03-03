import { Router, Request, Response } from 'express';
import tokenValidation from '../middleware/token';
import MetcheController from '../controller/MetcheController';

const metcheController = new MetcheController();

const router = Router();

router.get('/', (req: Request, res: Response) => metcheController.getAllMatches(req, res));
router.patch(
  '/:id/finish',
  tokenValidation,
  (req: Request, res: Response) => metcheController.finish(req, res),
);

export default router;
