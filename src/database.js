const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('railway', 'root', 'I9vcXWLTybrxeQtTokSF', {
    host: 'containers-us-west-123.railway.app',
    dialect: 'mysql'
});

module.exports = sequelize;
