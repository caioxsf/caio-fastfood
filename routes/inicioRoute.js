const express = require('express');
const inicioController = require('../controllers/inicioController');
const router = express.Router();

const ctrl = new inicioController();

router.get('/', ctrl.inicioView);

module.exports = router;