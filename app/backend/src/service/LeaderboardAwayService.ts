import Team from '../database/models/TeamModel';
import MatcheModel from '../database/models/MatcheModel';
import { pointsTeamAway } from '../utils/calculateLeaderBoard';

export default class LeaderboardawayService {
  static async getLeaderBoard() {
    const teams = await Team.findAll();

    const TeamsAwayResults = await Promise.all(
      teams.map(async (team) => {
        const awayMatches = await MatcheModel.findAll(
          { where: { homeTeamId: team.id, inProgress: false } },
        );

        const awayStatus = await awayMatches.map((matche) => (
          pointsTeamAway(team.teamName, [matche])));

        const status = awayStatus[awayMatches.length - 1];
        return { ...status };
      }),
    );
    return TeamsAwayResults;
  }
}
