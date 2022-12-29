const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('main_tag_youtube', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      tag_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING(1024),
        allowNull: true,
        primaryKey: true,
      },
      }, {
        sequelize, 
        underscored: true, 
        freezeTableName: true,
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
     });
};