module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
      user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nickname: {
        type: DataTypes.STRING, // STRING = VARCHAR(255)
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