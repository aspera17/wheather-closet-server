const Board_like = require('./board_like');
const Board_tag = require('./board_tag');
const Board_image = require('./board_image');

const {Board} = (sequelize, DataTypes) => {
  return sequelize.define('Board', {
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
    })
};

Board.hasMany(Board_like, {foreignKey: 'board_id', sourceKey: 'id'});
Board_like.belongsTo(Board, {onDelete:'set null'});
Board.hasMany(Board_tag, {foreignKey: 'board_id', sourceKey: 'id'});
Board_tag.belongsTo(Baord, {onDelete:'cascade'});
Board.hasOne(Board_image, {foreignKey: 'board_id', sourceKey: 'id'});
Board_image.belongsTo(Board, {onDelete:'cascade'});

module.exports = { Board }