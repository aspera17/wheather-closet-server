module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User_token', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      refresh_token: {
        type: DataTypes.STRING(1024),
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
        paranoid: false, //soft delete
        charset: 'utf8',
        collate: 'utf8_general_ci',
      })
};