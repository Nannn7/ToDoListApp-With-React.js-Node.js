import { Sequelize } from "sequelize";

const db = new Sequelize('db_todolist', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;