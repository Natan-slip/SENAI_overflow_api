const Sequelize = require ("sequelize");
const dbConfig = required("../config/database");

const Post = require("../models/Post");

const connection = 
    new Sequelize(dbConfig.url, dbConfig.config);

Post.init(connection);

    module.exports = connection;