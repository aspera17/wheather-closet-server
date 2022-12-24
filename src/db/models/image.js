module.exports = (sequelize, DataTypes) => {
    sequelize.define(
      "Image",
      {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        url: {
            type: DataTypes.STRING(300),
            allowNull: false,
            primaryKey: false
        },
        file_key: {
            type: DataTypes.STRING(100),
            allowNull: false,
            primaryKey: false
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: true,
            primaryKey: false
        },
      }, {
      sequelize,
      timestamps: false, //creatat+delete
      underscored: true, //스네이크케이스로 이름변경
      tableName: 'image',
      paranoid: false, //삭제시 완전삭제x -> 로그남김
      charset: 'utf8',
      collate: 'utf8_general_ci',
    }
    )
}

