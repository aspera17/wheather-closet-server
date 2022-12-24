module.exports = (sequelize, DataTypes) => {
    sequelize.define(
      "User_profile",
      {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING(200),
            allowNull: false,

        },
        deleted_at: {
            type: DataTypes.LITERAL('now()'),
            allowNull: true,

        },
        image_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,

        },
        user_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
      }, {
      sequelize,
      timestamps: true, //creatat+delete => deleted_at 에서 DataTypes.LITERAL('now()'), 랑 겹치는 느낌!?
      underscored: true, //스네이크케이스로 이름변경
      tableName: 'user_profile',
      paranoid: true, //삭제시 완전삭제x -> 로그남김
      charset: 'utf8',
      collate: 'utf8_general_ci',
    }
    )
}

