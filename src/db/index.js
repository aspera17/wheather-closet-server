const {Sequelize} = require('sequelize');
const {applyAssociations} = require('./associations');


const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config')[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);


const modelDefiners = [
    require('./models/banner'),
    require('./models/board_address'),
    require('./models/board_image'),
    require('./models/board_like'),
    require('./models/board_tag'),
    require('./models/board'),
    require('./models/image'),
    require('./models/main_tag_image'),
    require('./models/main_tag_youtube'),
    require('./models/tag'),
    require('./models/temperature'),
    require('./models/user_password'),
    require('./models/user_profile'),
    require('./models/user_token'),
    require('./models/user'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

applyAssociations(sequelize);

module.exports = sequelize;
