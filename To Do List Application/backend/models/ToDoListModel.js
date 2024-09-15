import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Tasks = db.define('tasks', {
    deskripsi: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
}, {
    freezeTableName: true
});

export default Tasks;

(async () => {
    await db.sync();
})();