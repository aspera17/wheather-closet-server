module.exports = (sequelize, DataTypes) => {
    const Board_address = sequelize.define('board_address', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      latitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      longitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      city: {
        tpye: DataTypes.STRING,
        allowNull: false,
        defaultValue: "서울시",
      }
      }, {
        sequelize,
        timestamps: true, 
        underscored: true, 
        freezeTableName: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      });
      
        Board_address.associate = (models) => {
  
        Board_address.hasOne(models.Board, {foreignKey: 'board_address_id', sourceKey: 'id'});
        Board.belongsTo(models.Board_address, {onDelete:'set null'});    
      };
        return Board_address;
    };
