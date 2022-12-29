const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user_password', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        password: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        }
    }, {
        sequelize,
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
};
