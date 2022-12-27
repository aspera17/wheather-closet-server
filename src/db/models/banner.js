const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('banner', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      temperature_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      main_tag_image_id: {
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
