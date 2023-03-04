import IMatch from '../interface/IMetche';

const teamScore = {
  name: '',
  totalPoints: 0,
  totalGames: 0,
  totalVictories: 0,
  totalDraws: 0,
  totalLosses: 0,
  goalsFavor: 0,
  goalsOwn: 0,
};

const resetScore = () => {
  teamScore.totalPoints = 0;
  teamScore.totalGames = 0;
  teamScore.totalVictories = 0;
  teamScore.totalDraws = 0;
  teamScore.totalLosses = 0;
  teamScore.goalsFavor = 0;
  teamScore.goalsOwn = 0;
};

const victoryHome = (homeTeamGoals:number, awayTeamGoals:number) => {
  teamScore.totalPoints += 3;
  teamScore.totalVictories += 1;
  teamScore.goalsFavor += homeTeamGoals;
  teamScore.goalsOwn += awayTeamGoals;
};

const victoryAway = (homeTeamGoals:number, awayTeamGoals:number) => {
  teamScore.totalPoints += 3;
  teamScore.totalVictories += 1;
  teamScore.goalsFavor += awayTeamGoals;
  teamScore.goalsOwn += homeTeamGoals;
};

const drawHome = (homeTeamGoals:number, awayTeamGoals:number) => {
  teamScore.totalPoints += 1;
  teamScore.totalDraws += 1;
  teamScore.goalsFavor += homeTeamGoals;
  teamScore.goalsOwn += awayTeamGoals;
};

const drawAway = (homeTeamGoals:number, awayTeamGoals:number) => {
  teamScore.totalPoints += 1;
  teamScore.totalDraws += 1;
  teamScore.goalsFavor += awayTeamGoals;
  teamScore.goalsOwn += homeTeamGoals;
};

const losseHome = (homeTeamGoals:number, awayTeamGoals:number) => {
  teamScore.totalPoints += 0;
  teamScore.totalLosses += 1;
  teamScore.goalsFavor += homeTeamGoals;
  teamScore.goalsOwn += awayTeamGoals;
};

const losseAway = (homeTeamGoals:number, awayTeamGoals:number) => {
  teamScore.totalPoints += 0;
  teamScore.totalLosses += 1;
  teamScore.goalsFavor += awayTeamGoals;
  teamScore.goalsOwn += homeTeamGoals;
};

const calculatePointsHome = ((matches: IMatch[]) => {
  matches.forEach(({ homeTeamGoals, awayTeamGoals }) => {
    if (homeTeamGoals > awayTeamGoals) victoryHome(homeTeamGoals, awayTeamGoals);
    if (homeTeamGoals === awayTeamGoals) drawHome(homeTeamGoals, awayTeamGoals);
    if (homeTeamGoals < awayTeamGoals) losseHome(homeTeamGoals, awayTeamGoals);
  });
});

const calculatePointsAway = ((matches:IMatch[]) => {
  matches.forEach(({ homeTeamGoals, awayTeamGoals }) => {
    if (homeTeamGoals > awayTeamGoals) victoryAway(homeTeamGoals, awayTeamGoals);
    if (homeTeamGoals === awayTeamGoals) drawAway(homeTeamGoals, awayTeamGoals);
    if (homeTeamGoals < awayTeamGoals) losseAway(homeTeamGoals, awayTeamGoals);
  });
});

const pointsTeamHome = (name:string, matches:IMatch[]) => {
  if (name !== teamScore.name) {
    resetScore();
  }
  teamScore.name = name;
  calculatePointsHome(matches);
  teamScore.totalGames += 1;

  return teamScore;
};

const pointsTeamAway = (name:string, matches:IMatch[]) => {
  if (name !== teamScore.name) {
    resetScore();
  }
  teamScore.name = name;
  calculatePointsAway(matches);
  teamScore.totalGames += 1;

  return teamScore;
};

export { pointsTeamHome, pointsTeamAway };
