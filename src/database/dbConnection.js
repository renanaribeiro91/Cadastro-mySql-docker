const Sequelize = require('sequelize')
const dbConfig = require('../config/configDB')


export const connection = new Sequelize(dbConfig)