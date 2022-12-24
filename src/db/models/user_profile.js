module.exports = (sequelize, DataTypes) => {
    sequelize.define(
      "User_profile",
      {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING(200),
            allowNull: false,
            primaryKey: false
        },
        deleted_at: {
            type: DataTypes.LITERAL('now()'),
            allowNull: true,
            primaryKey: false
        },
        image_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
      }, {
      sequelize,
      timestamps: true, //creatat+delete
      underscored: true, //스네이크케이스로 이름변경
      tableName: 'user_profile',
      paranoid: trus, //삭제시 완전삭제x -> 로그남김
      charset: 'utf8',
      collate: 'utf8_general_ci',
    }
    )
}

