const express = require('express');
const inicioController = require('../controllers/inicioController');
const router = express.Router();

const ctrl = new inicioController();

router.get('/', ctrl.inicioView);
router.get('/pedir', ctrl.pedirView);
router.get('/cardapio', ctrl.cardapioView);

module.exports = router;