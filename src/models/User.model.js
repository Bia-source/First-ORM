import { DataTypes } from 'sequelize';
import { database } from '../database/connection.db.js';

// database -> representa o nosso banco de dados
export const User = database.define('User',
  {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    username: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    statusOn: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }
);