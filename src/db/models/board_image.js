module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Board_image', {
      board_image_id: {
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
        underscored: true, 
        freezeTableName: true,
        paranoid: true, //soft delete
        charset: 'utf8',
        collate: 'utf8_general_ci',
      })
};