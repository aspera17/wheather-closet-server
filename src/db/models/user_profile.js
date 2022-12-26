module.exports = (sequelize, DataTypes) => {
    return sequelize.define("User_profile", {
      user_profile_id: {
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
      })
};
