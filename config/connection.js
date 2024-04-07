const Sequelize = require('sequelize')
require('dotenv').config()

// declare global variable
let sequelize;

// Create a connection object
if (process.env.JAWSDB_URL) {
    // if theres a JawsDB connect
    sequelize = new Sequelize(process.env.JAWSDB_URL)
} else {
    sequelize = new Sequelize(
        // database name
        process.env.DB_NAME,
        // username
        process.env.DB_USER,
        // password
        process.env.DB_PASSWORD,
        {
            // database location
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        }
    )
}

module.exports = sequelize
