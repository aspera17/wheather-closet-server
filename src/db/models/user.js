module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
      id: {
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
      });

        User.associate = (models) => {

        User.hasOne(models.User_password, {foreignKey: 'user_id', sourceKey: 'id'});
        User_password.belongsTo(models.User, {onDelete:'cascade'});
        User.hasOne(models.User_profile, {foreignKey: 'user_id', sourceKey: 'id'});
        User_profile.belongsTo(models.User, {onDelete:'cascade'});
        User.hasOne(models.User_token, {foreignKey: 'user_id', sourceKey: 'id'});
        User_token.belongsTo(models.User, {onDelete:'cascade'});
        User.hasMany(models.Board_like, {foreignKey: 'user_id', sourceKey: 'id'});
        Board_like.belongsTo(models.User, {onDelete:'set null'});
        User.hasMany(models.Board, {foreignKey: 'user_id', sourceKey: 'id'});
        Board.belongsTo(models.User, {onDelete:'set null'});
      };
        return User;
    };