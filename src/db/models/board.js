const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('board', {
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
        updatedAt: false,
        deletedAt: false,
        createdAt: true,
        underscored: true,
        freezeTableName: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
    })
};
