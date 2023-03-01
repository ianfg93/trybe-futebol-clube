import { Router, Request, Response } from 'express';
import tokenValidation from '../middleware/token';
import LoginController from '../controller/LoginController';
import validate from '../middleware/login';

const loginController = new LoginController();

const router = Router();

router.post('/', validate, (req: Request, res: Response) => loginController.login(req, res));
router.get(
  '/role',
  tokenValidation,
  (req: Request, res: Response) => loginController.loginRole(req, res),
);

export default router;
