import { Router, Request, Response } from 'express';
import LoginController from '../controller/LoginController';
import validate from '../middleware/login';

const loginController = new LoginController();

const router = Router();

router.post('/', validate, (req: Request, res: Response) => loginController.login(req, res));

export default router;
