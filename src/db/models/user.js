module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
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
      })
};

User.hasOne(User_password, {foreignKey: 'user_id', sourceKey: 'id'});
User_password.belongsTo(User, {onDelete:'cascade'});
User.hasOne(User_profile, {foreignKey: 'user_id', sourceKey: 'id'});
User_profile.belongsTo(User, {onDelete:'cascade'});
User.hasOne(User_token, {foreignKey: 'user_id', sourceKey: 'id'});
User_token.belongsTo(User, {onDelete:'cascade'});
User.hasMany(Board_like, {foreignKey: 'user_id', sourceKey: 'id'});
Board_like.belongsTo(User, {onDelete:'set null'});
User.hasMany(Board, {foreignKey: 'user_id', sourceKey: 'id'});
Board.belongsTo(User, {onDelete:'set null'});