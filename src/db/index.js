//models/index.js
const Sequelize = require('sequelize');
const {User} = require('./models')
const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = User;


// User.init(sequelize);


// User.associate(db)



module.exports = db;
