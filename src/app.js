const express = require("express");
require("./database");
const routes = require("./routes");

const app = express();

app.use(routes);

module.exports = app;
