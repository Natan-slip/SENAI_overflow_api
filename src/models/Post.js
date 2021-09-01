const { Model, STRING } = require("sequelize");


class Post extends Model {

    static init(connection){
        super.init(
            {
                title: STRING,
                description: STRING,
                image: STRING,
                gist: STRING
            },
            {
                sequelize: connection,
            }
        )
    }

    static associate(models){
        this.belongsTo(models.User);
    }

}

module.exports = Post;