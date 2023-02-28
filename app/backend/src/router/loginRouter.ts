import { Router } from 'express';
import LoginController from '../controller/LoginController';
import validate from '../middleware/login';

const loginController = new LoginController();

const router = Router();

router.post('/', validate, loginController.login);

export default router;
