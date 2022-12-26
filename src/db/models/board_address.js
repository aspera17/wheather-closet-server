module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Board_address', {
  board_address_id: {
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
})
};
