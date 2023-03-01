import { Router, Request, Response } from 'express';
import MetcheController from '../controller/MetcheController';

const metcheController = new MetcheController();

const router = Router();

router.get('/', (req: Request, res: Response) => metcheController.getAllMatches(req, res));

export default router;
