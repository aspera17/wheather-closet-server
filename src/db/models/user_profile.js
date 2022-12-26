module.exports = (sequelize, DataTypes) => {
    const User_profile = sequelize.define("User_profile", {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,  
      },
      email: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      image_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
      },
      user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true
      },
      }, {
        sequelize,
        timestamps: true, 
        underscored: true,
        freezeTableName: true,
        paranoid: true, //soft delete
        charset: 'utf8',
        collate: 'utf8_general_ci',
      });
        return User_profile;
    };
