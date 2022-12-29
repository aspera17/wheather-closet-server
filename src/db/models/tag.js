const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('tag', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_main: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0,
        },
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
