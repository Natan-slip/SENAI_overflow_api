const express = require("express");
require("./database");
const routes = require("./routes");
const cors = require("cors");

const app = express();

app.use(cors());

//dizemos para o express que ele pode aceitar json
app.use(express.json());

app.use(routes);

module.exports = app;