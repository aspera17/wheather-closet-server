const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('temperature', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      min: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      max: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      }, {
        sequelize,
        underscored: true, 
        freezeTableName: true,
        paranoid: true, //soft delete
        charset: 'utf8',
        collate: 'utf8_general_ci',
     });
};
