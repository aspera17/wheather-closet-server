module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Board', {
    board_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    clothes_style: {
      type: DataTypes.ENUM('정장', '캐쥬얼', '스트릿'),
      allowNull: false,
    },
    board_address_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    user_id: {
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