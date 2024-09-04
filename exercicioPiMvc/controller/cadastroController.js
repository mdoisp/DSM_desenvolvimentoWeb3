const cadastroModel = require('../model/cadastroModel');

const criarCadastro = (req, res) => {
    const { nome, email } = req.body;
    if (nome && email) {
        cadastroModel.criarCadastro(nome, email);
        res.status(201).send('Cadastro criado com sucesso');
    } else {
        res.status(400).send('Dados insuficientes');
    }
};

const listarCadastros = (req, res) => {
    res.json(cadastroModel.listarCadastros());
};

const excluirCadastro = (req, res) => {
    const { email } = req.params;
    if (cadastroModel.excluirCadastro(email)) {
        res.send('Cadastro excluído com sucesso');
    } else {
        res.status(404).send('Cadastro não encontrado');
    }
};

const contarCadastros = (req, res) => {
    res.json({ count: cadastroModel.contarCadastros() });
};

module.exports = { criarCadastro, listarCadastros, excluirCadastro, contarCadastros };
