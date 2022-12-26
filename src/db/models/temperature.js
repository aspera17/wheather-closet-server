module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Temperature', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      min: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      max: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      }, {
        sequelize,
        timestamps: false, 
        underscored: true, 
        freezeTableName: true,
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
     })
};

Temperature.hasMany(Banner, {foreignKey: 'temperature_id', sourceKey: 'id'});
Banner.belongsTo(Temperature, {onDelete:'set null'});