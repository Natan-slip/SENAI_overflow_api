module.exports = {
    url: "mysql://root:bcd127@localhost:3306/senai_overflow_db",
    config: {
        dialect: "mysql",
        define: {
            timestamp: true,
            underscored: true
        }
    }
}