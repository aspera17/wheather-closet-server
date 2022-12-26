module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('image', {
      id: {
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
     });

        Image.associate = (models) => {

        Image.hasMany(models.User_profile, {foreignKey: 'image_id', sourceKey: 'id'});
        User_profile.belongsTo(models.Image, {onDelete:'cascade'});
        Image.hasMany(models.Board_image, {foreignKey: 'image_id', sourceKey: 'id'});
        Board_image.belongsTo(models.Image, {onDelete:'cascade'});
        Image.hasMany(models.Main_tag_image, {foreignKey: 'image_id', sourceKey: 'id'});
        Main_tag_image.belongsTo(models.Image, {onDelete:'cascade'});
      };
        return Image;
    };