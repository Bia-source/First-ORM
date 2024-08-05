import { DataTypes } from 'sequelize';
import { database } from '../database/connection.db.js';
import { User } from './User.model.js';

// database -> representa o nosso banco de dados
export const Relashionship = database.define('Relashionship',
  {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    first_user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    second_user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    type: {
      type: DataTypes.STRING,
      defaultValue: false
    }
  }
);




