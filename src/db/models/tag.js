module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Tag', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_main: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
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

Tag.hasMany(Board_tag, {foreignKey: 'tag_id', sourceKey: 'id'});
Board_tag.belongsTo(Tag, {onDelete:'cascade'});
Tag.hasMany(Main_tag_image, {foreignKey: 'tag_id', sourceKey: 'id'});
Main_tag_image.belongsTo(Tag, {onDelete:'cascade'});
Tag.hasMany(Main_tag_youtube, {foreignKey: 'tag_id', sourceKey: 'id'});
Main_tag_youtube.belongsTo(Tag, {onDelete:'cascade'});
