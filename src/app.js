const express = require("express");
require("./database");
const routes = require("./routes");

const app = express();

//dizemos para o express que ele pode aceitar json
app.use(express.json());

app.use(routes);

module.exports = app;