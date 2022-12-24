module.exports = (sequelize, DataTypes) => {
    sequelize.define(
      "Main_tag_image",
      {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      image_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: false
      },
      tag_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: false
      },
      }, {
      sequelize,
      timestamps: false, //creatat+delete
      underscored: true, //스네이크케이스로 이름변경
      tableName: 'banner',
      paranoid: false, //삭제시 완전삭제x -> 로그남김
      charset: 'utf8',
      collate: 'utf8_general_ci',
    }
    )
}