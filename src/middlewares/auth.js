const jwt = require("jsonwebtoken");
const auth = require("../config/auth");

module.exports = (req, res, next) => {

    // pegar o token no cabeçalho
    const authorization = req.headers.authorization;

    // verificar se token veio
    if (!authorization) {
        return res.status(401).send({
            error: "Toekn não informado"
        })
    }

    // separar o prefixo do token
    const [prefixo, token] = authorization.split(" ");

    // verificar se o token é válido
    try {
        // Se token válido, recebemos o payload
        const payload = jwt.verify(token, auth.secret);

        // Colocamos o id do usuário na requisição
        //para que o controller possa recuperar
        req.userId = payload.userId;

        return next();

    } catch (error) {
        // retornamos token inválido
        res.status(401).send({
            error: "Token inválido"
        })
    }

    

}