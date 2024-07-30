import { Sequelize } from "sequelize";

export const database = new Sequelize('orm', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

// verifincando se a conexao com o banco de dados foi bem sucedida
try {
    await database.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}