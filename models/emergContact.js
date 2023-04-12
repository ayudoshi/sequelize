const Sequelize = require('sequelize');
const sequelize = require('../utils/dbConnection');

const EmergContact = sequelize.define("emergContact",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type:Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    relation: {
        type: Sequelize.STRING,
        allowNull: false
    },
    relationType: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = EmergContact;