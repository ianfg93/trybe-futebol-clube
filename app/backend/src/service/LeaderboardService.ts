import Team from '../database/models/TeamModel';
import MatcheModel from '../database/models/MatcheModel';
import { pointsTeamHome } from '../utils/calculateLeaderBoard';

export default class LeaderboardService {
  static async getLeaderBoard() {
    const teams = await Team.findAll();

    const TeamsHomeResults = await Promise.all(
      teams.map(async (team) => {
        const awayMatches = await MatcheModel.findAll(
          { where: { homeTeamId: team.id, inProgress: false } },
        );

        const homeStatus = await awayMatches.map((match) => (
          pointsTeamHome(team.teamName, [match])));

        const status = homeStatus[awayMatches.length - 1];
        return { ...status };
      }),
    );
    return TeamsHomeResults;
  }
}
