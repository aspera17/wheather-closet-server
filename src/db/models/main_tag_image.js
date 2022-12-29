const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('main_tag_image', {
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
      tag_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
    }, {
        sequelize,
        timestamps: false, 
        underscored: true, 
        freezeTableName: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
};
