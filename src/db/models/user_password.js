module.exports = (sequelize, DataTypes) => {
    const User_password = sequelize.define('user_password', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      password: {
        type: DataTypes.STRING(200),
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
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      });
        return User_password;
    };
