const Sequelize = require('sequelize')
const dbConfig = require('../config/configDB')
const User = require('../models/user')


const connection = new Sequelize(dbConfig)

const db = async () =>{
    try {
        const connect = await connection.authenticate();
        console.log('Connection has been established successfully.');
      } catch (err) {
        console.error('Unable to connect to the database:', err);
      }
}

User.init(connection)


module.export = db()