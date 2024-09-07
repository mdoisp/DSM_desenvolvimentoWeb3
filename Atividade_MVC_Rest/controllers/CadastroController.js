const Cadastro = require('../models/Cadastro');

const CadastroController = {
    exibirFormularioCadastro: (req, res) => {
        res.render('index');
    },

    criarCadastro: (req, res) => {
        const { nome, email } = req.body;
        Cadastro.criarCadastro(nome, email);
        res.redirect('/');
    }
};

module.exports = CadastroController;
