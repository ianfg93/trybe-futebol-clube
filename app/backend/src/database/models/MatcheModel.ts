import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';
import Team from './TeamModel';

class MatcheModel extends Model {
  declare readonly id: number;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

MatcheModel.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: true,
  },
  homeTeamId: {
    type: INTEGER,
    allowNull: false,
    references: { model: 'teams', key: 'id' },
  },
  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeamId: {
    type: INTEGER,
    allowNull: false,
    references: { model: 'teams', key: 'id' },
  },
  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  inProgress: {
    type: BOOLEAN,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  timestamps: false,
  modelName: 'Matches',
  tableName: 'matches',

});

MatcheModel.belongsTo(Team, { as: 'homeTeam', foreignKey: 'homeTeamId' });
MatcheModel.belongsTo(Team, { as: 'awayTeam', foreignKey: 'awayTeamId' });

export default MatcheModel;
