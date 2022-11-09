const Sequelize = require("../config/sequelize")
const {sequelize,DataTypes} = require('sequelize');

const userModel = Sequelize.define('users', {
    name: {
        type: DataTypes.STREING
    },
    emial: {
        type : DataTypes.STREING
    },
    password: {
        type : DataTypes.STREING
    }
})

module.exports = userModel;