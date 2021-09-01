const routes = require("express").Router();

const postController = require("./controllers/posts");
const sessionController = require("./controllers/sessions");
const userController = require("./controllers/users");
const authMiddleware = require("./middlewares/auth");

// Rotas públicas
routes.post('/sessions', sessionController.store);
routes.post('/users', userController.store);

routes.use(authMiddleware);

// Rotas privadas
routes.get('/posts', postController.index);

module.exports = routes;