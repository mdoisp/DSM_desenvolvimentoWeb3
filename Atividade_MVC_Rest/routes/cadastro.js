const express = require('express');
const router = express.Router();
const CadastroController = require('../controllers/CadastroController');

router.get('/', CadastroController.exibirFormularioCadastro);

router.post('/cadastro', CadastroController.criarCadastro);

module.exports = router;
