const app = require("./app");

module.exports = {
    url: "mysql://root:bcd127@10.107.144.32:3306/senai_overflow_db_3",
    config: {
        dialect: "mysql",
        define: {
            timestamp: true,
            underscored: true
        }
    }
}