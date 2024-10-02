exports.PRIVATE_KEY = '1010FFF';
exports.user = {
    name: 'Matheus Prado',
    email: 'teste@email.com',
};

exports.tokenValited = (request, response, next) =>{
    console.log("Chegou")
    const [, token] = request.headers.authorization?.split(" ") || [" ", " "];

    if(!token)
        return response.status(401).send("Acesso negado. Nenhum token fornecido")

    try {
        const payload = jsonwebtoken.verify(token, this.PRIVATE_KEY);
        const userIdFromToken = typeof payload != "string" && payload.user;

        if(user && userIdFromToken) {
            return response.send(401).json({ message: "Token inválido"});
        }

        request.header["user"] = payload.user;
        
        return next();
    } catch (error) {
        console.log(error);
        return response.status(401).json({message: "Token inválido"});
    }
}