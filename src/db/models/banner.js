module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Banner', {
      banner_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      temperature_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
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
        paranoid: false, //soft delete
        charset: 'utf8',
        collate: 'utf8_general_ci',
      })
};