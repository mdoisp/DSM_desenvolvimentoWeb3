const express = require('express');
const router = express.Router()

const userController = require('../controller/userController');

router.get('/user', userController.getUser);
router.post('/user', userController.create);
router.get('/user/:id', userController.details);

module.exports = router;