const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('board_tag', {
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
      board_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      }
    }, {
        sequelize,
        timestamps: false, 
        underscored: true, 
        freezeTableName: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
};
