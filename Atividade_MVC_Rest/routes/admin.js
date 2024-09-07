const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController');

router.get('/', AdminController.exibirAreaAdmin);

router.get('/listar', AdminController.listarCadastros);

router.get('/contar', AdminController.contarCadastros);

router.delete('/excluir/:email', AdminController.excluirCadastro);

module.exports = router;
