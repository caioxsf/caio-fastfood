const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

const ctrl = new adminController();

router.get('/', ctrl.adminView);
router.get('/montar', ctrl.montarLancheView);
router.post('/montar', ctrl.montarLanchePost);

module.exports = router;