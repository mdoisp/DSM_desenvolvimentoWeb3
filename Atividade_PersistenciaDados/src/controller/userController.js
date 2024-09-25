var User = require('../model/userModel');

exports.getUser = async function(req, res) {
    try {
        const result = await User.find();
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.create = function (req, res){
    let user = new User(
        {
            name: req.body.name,
            age: req.body.age
        }
    );
    user.save()
        .then(res.status(201).send(user.toJSON()))
        .catch((error) =>{
            res.status(500).send({ message: `${error.message} - Falha ao cadastrar`})
        })
};

exports.details = async function(req, res)  {
    try {
        const result = await User.findById(req.params.id);
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.update = async (req, res) => {
    const { id } = req.params;
    const { nome, idade } = req.body;

    try {
        const usuarioAtualizado = await Usuario.findByIdAndUpdate(
            id,
            { nome, idade },
            { new: true, runValidators: true }
        );

        if (!usuarioAtualizado) {
            return res.status(404).json({ mensagem: "Usuário não encontrado." });
        }

        res.status(200).json({
            mensagem: "Usuário atualizado com sucesso.",
            usuario: usuarioAtualizado
        });
    } catch (err) {
        res.status(400).json({ mensagem: "Erro ao atualizar usuário.", erro: err.message });
    }
};
