const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('board_address', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      latitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      longitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "서울시",
      }
    }, {
        sequelize,
        timestamps: true,
        updatedAt: false,
        deletedAt: false,
        createdAt: true, 
        underscored: true, 
        freezeTableName: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
      
};
