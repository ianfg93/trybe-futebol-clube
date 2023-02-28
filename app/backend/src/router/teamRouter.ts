import { Router } from 'express';
import TeamController from '../controller/TeamController';

const teamController = new TeamController();

const router = Router();

router.get('/', (req, res) => teamController.getAllTeams(req, res));

export default router;
