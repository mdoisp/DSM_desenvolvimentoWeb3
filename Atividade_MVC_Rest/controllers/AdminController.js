const Cadastro = require('../models/Cadastro');

const AdminController = {
    exibirAreaAdmin: (req, res) => {
        const cadastros = Cadastro.listarCadastros();
        const totalCadastros = Cadastro.contarCadastros();
        res.render('admin', { cadastros, totalCadastros });
    },

    excluirCadastro: (req, res) => {
        const email = req.params.email;
        Cadastro.excluirCadastro(email);
        res.redirect('/admin');
    },

    listarCadastros: (req, res) => {
        const cadastros = Cadastro.listarCadastros();
        res.json(cadastros);
    },

    contarCadastros: (req, res) => {
        const totalCadastros = Cadastro.contarCadastros();
        res.json({ totalCadastros });
    }
};

module.exports = AdminController;
