const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('board_image', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      image_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      board_id: {
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
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
};
