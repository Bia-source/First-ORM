import { DataTypes } from 'sequelize';
import { database } from '../database/connection.db.js';
import { User } from './User.model.js';

// database -> representa o nosso banco de dados
export const Message = database.define('Message',
  {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    user_receiver_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    user_sender_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    favorite: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    }
  }
);

// Uma mensagem pode ter um sender/receiver
// e um usuario sender/receiver pode ter varias mensagens
// 1-N

// uma mensagem TEM UM usuario
// Message.hasOne(User, {
//     foreignKey: {
//         name: 'user_sender_id',
//         type: DataTypes.UUID
//     }
// });

// Message.hasOne(User, {
//     foreignKey: {
//         name: 'user_receiver_id',
//         type: DataTypes.UUID
//     }
// });


