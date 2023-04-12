const Sequelize = require('sequelize');
require('dotenv').config();

const dbusername=process.env.DB_USERNAME;
const password=process.env.DB_PASS;
const dbname=process.env.DB_DATABASE;

const sequelize = new Sequelize(dbname,dbusername,password,{
    dialect: "mysql"
});

module.exports = sequelize;