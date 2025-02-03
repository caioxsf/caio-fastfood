const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

const ctrl = new adminController();

router.get('/montar', ctrl.montarLancheView);

module.exports = router;