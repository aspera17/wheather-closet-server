module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Image', {
      image_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,  
      },
      url: {
        type: DataTypes.STRING(1024),
        allowNull: true,
      },
      file_key: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      }, {
        sequelize,
        timestamps: true, 
        underscored: true, 
        freezeTableName: true,
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
     })
};