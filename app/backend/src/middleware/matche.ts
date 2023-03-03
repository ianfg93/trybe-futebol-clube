import { NextFunction, Response, Request } from 'express';
import TeamService from '../service/TeamService';

const matcheValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeamId, awayTeamId } = req.body;

  const teamService = new TeamService();

  if (homeTeamId === awayTeamId) {
    return res.status(422).send({
      message: 'It is not possible to create a match with two equal teams' });
  }

  const homeTeam = await teamService.getTeamsId(homeTeamId);
  const awayTeam = await teamService.getTeamsId(awayTeamId);

  if (!homeTeam || !awayTeam) {
    return res.status(404).send({
      message: 'There is no team with such id!' });
  }
  next();
};

export default matcheValidation;
