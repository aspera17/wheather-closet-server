module.exports = (sequelize, DataTypes) => {
    const Board = sequelize.define('Board', {
      id: {
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
      });

        Board.associate = (models) => {

        Board.hasMany(models.Board_like, {foreignKey: 'board_id', sourceKey: 'id'});
        Board_like.belongsTo(models.Board, {onDelete:'set null'});
        Board.hasMany(models.Board_tag, {foreignKey: 'board_id', sourceKey: 'id'});
        Board_tag.belongsTo(models.Baord, {onDelete:'cascade'});
        Board.hasOne(models.Board_image, {foreignKey: 'board_id', sourceKey: 'id'});
        Board_image.belongsTo(models.Board, {onDelete:'cascade'});
      };
        return Board;
    };
