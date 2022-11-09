const Sequelize = require('../config/sequelize')
const {sequelize,DataTypes} = require('sequelize');

const taskModel = Sequelize.define('task', {
    title: {
        type: DataTypes.STRING,
        allowNull:false
    },
    description: {
        type: DataTypes.STRING
    },
    status: {
        type : DataTypes.BOOLEAN
    }
})

module.exports = taskModel;