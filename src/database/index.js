const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Post = require("../models/Post");
const User = require("../models/User");

const connection = 
    new Sequelize(dbConfig.url, dbConfig.config);

//inicializando os models
Post.init(connection);
User.init(connection);

//inicializando os relacionamentos
Post.associate(connection.models);
User.associate(connection.models);


module.exports = connection;