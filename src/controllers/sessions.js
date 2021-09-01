const User = require("../models/User");
const jwt = require("jsonwebtoken");
const auth = require("../config/auth");

module.exports = {
    async store(req, res){
        const {email, password} = req.body;

        // verificar se o usuário existe 
        const user = await User.findOne({
            where: {
                email: email
            }
        });

        // se a senha está correta
        if(!user || user.password !== password)
            return res.status(403)
                .send({error: "Usuário e/ou senha inválidos"});

        //gerar um token
        jwt.sign({userId: user.id }, auth.secret, {expiresIn: "1h"});

        //enviar resposta
        res.send({
            user: {
                email: user.email,
                name: user.name
            },
            token
        })
    }
}