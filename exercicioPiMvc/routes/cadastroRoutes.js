const express = require('express');
const router = express.Router();
const cadastroController = require('../controller/cadastroController');

router.post('/cadastros', cadastroController.criarCadastro);
router.get('/cadastros', cadastroController.listarCadastros);
router.delete('/cadastros/:email', cadastroController.excluirCadastro);
router.get('/cadastros/count', cadastroController.contarCadastros);

module.exports = router;
