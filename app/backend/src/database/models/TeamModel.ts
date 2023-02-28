import { INTEGER, STRING, Model } from 'sequelize';
import db from '.';

class TeamModel extends Model {
  declare readonly id: number;
  declare teamName: string;
}

TeamModel.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: {
    type: STRING,
    allowNull: false,
    field: 'team_name',
  },
}, {
  underscored: true,
  sequelize: db,
  timestamps: false,
  modelName: 'TeamsModel',
  tableName: 'teams',
});

export default TeamModel;
