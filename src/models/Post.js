const { Model, DataTypes } = require("sequelize");


class Post extends Model {

    static init(connection){
        super.init(
            {
                title: DataTypes.STRING,
                description: DataTypes.STRING,
                image: DataTypes.STRING,
                gist: DataTypes.STRING,
            },
            {
                sequelize: connection,
            }
        );
    }

    static associate(models){
        this.belongsTo(models.User);
    }

}
module.exports = Post;