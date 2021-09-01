const User = require("../models/User");
const bcryt = require("bcryptjs");

modelue.exports = {
    async store(req,res) {
        const {name, email, password} = req.body;

        // verificar se o usuário já existe
        let user = await User.findeOne({
            where: {
                email: email
            }
        })

        if (user) {
            return res.status(400)
                .send({error: "Este e-mail já está sendo ultilizado"})
        }

        // gerar o hash da senha
        const passwordHashed = bcryt.hashSync(password)

        // inserir o usuário na banco
        user = await User.create({
            name: name,
            email: email,
            password: passwordHashed
        })

        // gerar um token

        // retornar o usuário
        res.send({
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        })
    }
}