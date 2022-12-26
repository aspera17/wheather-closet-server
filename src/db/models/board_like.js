module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Board_like', {
    board_like_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    board_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    unliked_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW
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