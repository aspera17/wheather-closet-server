const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user_token', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      refresh_token: {
        type: DataTypes.STRING(1024),
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      }
      }, {
        sequelize,
        timestamps: true,
        updatedAt: false,
        deletedAt: false,
        createdAt: true,
        underscored: true, 
        freezeTableName: true,
        paranoid: true, //soft delete
        charset: 'utf8',
        collate: 'utf8_general_ci',
      });
};