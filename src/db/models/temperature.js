module.exports = (sequelize, DataTypes) => {
    sequelize.define(
      "Temperature",
      {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        min: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: false
        },
        max: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: false
        },
      }, {
      sequelize,
      timestamps: false, //creatat+delete
      underscored: true, //스네이크케이스로 이름변경
      tableName: 'temperature',
      paranoid: false, //삭제시 완전삭제x -> 로그남김
      charset: 'utf8',
      collate: 'utf8_general_ci',
    }
    )
}
