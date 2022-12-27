module.exports = (sequelize, DataTypes) => {
    const Main_tag_image = sequelize.define('main_tag_image', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      image_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      tag_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      }, {
        sequelize,
        timestamps: false, 
        underscored: true, 
        freezeTableName: true,
        paranoid: false, //soft delete
        charset: 'utf8',
        collate: 'utf8_general_ci',
     });
        Main_tag_image.associate = (models) => {

        
        Main_tag_image.hasMany(models.Banner, {foreignKey: 'main_tag_image_id', sourceKey: 'id'});
        Banner.belongsTo(models.Main_tag_image, {onDelete:'set null'});
      };
        return Main_tag_image;
    };