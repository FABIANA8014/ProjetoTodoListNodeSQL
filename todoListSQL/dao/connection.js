const { Sequelize } = require('sequelize');


const connection = new Sequelize({
    dialect: 'mssql',
    database: 'TestDB',
    username: 'SA',
    host: 'localhost',
    port: '1433',
    password: 'Fabi@2020',
    logging: true,
})

module.exports = connection;

