import sequelize from 'sequelize';

const db = new sequelize("footBall", "root", "root",{
    host: "localhost",
    dialect: "mysql"
});

export default db;