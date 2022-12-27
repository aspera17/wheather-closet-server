const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user_profile', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,  
      },
      email: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      image_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
      },
      user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true
      },
      }, {
        sequelize,
        timestamps: true,
        updatedAt: true,
        deletedAt: false,
        createdAt: true,
        underscored: true, 
        freezeTableName: true,
        paranoid: true, //soft delete
        charset: 'utf8',
        collate: 'utf8_general_ci',
      });
};
