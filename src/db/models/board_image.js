module.exports = (sequelize, DataTypes) => {
    const Board_image = sequelize.define('board_image', {
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
        underscored: true, 
        freezeTableName: true,
        paranoid: true, //soft delete
        charset: 'utf8',
        collate: 'utf8_general_ci',
      });
        return Board_image;
    };