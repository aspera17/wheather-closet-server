const Main_tag_youtube = (sequelize, DataTypes) => {
    return sequelize.define('Main_tag_youtube', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      tag_id: {
        type: DataTypes.INTEGER,UNSIGNED,
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING(1024),
        allowNull: true,
        primaryKey: true,
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

module.exports = {Main_tag_youtube}