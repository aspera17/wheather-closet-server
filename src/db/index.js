const {Sequelize} = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config')[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);


const modelDefiners = [
    require('./models/board'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

module.exports = sequelize;
