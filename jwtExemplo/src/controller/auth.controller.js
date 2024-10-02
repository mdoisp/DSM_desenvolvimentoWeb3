const jsonwebtoken = require('jsonwebtoken');
const {PRIVATE_KEY, user} = require('../../auth')

exports.public = (_, res) =>
    resp.status(200).json({
        message: "Testando rota pública",
    });

exports.login = (req, res) =>{
    const [, hash] = req.headers.authorization?.split("") || [" ", " "];
    const email = req.body.email;
    const password = req.body.password;

    try {
        const correctPassword = email === "teste@email.com"
        && password === 12345;

        if(!correctPassword){
            return resp.status(401).send("Senha ou email inválido");
        }

        const token = jsonwebtoken.sign(
            {user:JSON.stringify(user)},
            PRIVATE_KEY,
            {
                expiresIn: "60m"
            }
        );
        return resp.status(200).json({data: {user, token}});
    } catch (error) {
        console.log(error);
        return resp.send(error);
    }
};

exports.private
