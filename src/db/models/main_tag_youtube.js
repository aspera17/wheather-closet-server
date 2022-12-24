module.exports = (sequelize, DataTypes) => {
    sequelize.define(
      "Main_tag_youtube",
      {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        tag_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: false
        },
        url: {
            type: DataTypes.STRING(1024),
            allowNull: true,
            primaryKey: false
        },
      }, {
      sequelize,
      timestamps: false, //creatat+delete
      underscored: true, //스네이크케이스로 이름변경
      tableName: 'main_tag_youtube',
      paranoid: false, //삭제시 완전삭제x -> 로그남김
      charset: 'utf8',
      collate: 'utf8_general_ci',
    }
    )
}
