const montarLancheModel = require("../models/montarLancheModel");

class inicioController {

    inicioView(req,res) {
        res.render('public/inicio')
    }

    async pedirView(req,res) {
        let lanchesModel = new montarLancheModel();
        let listaLanches = await lanchesModel.listarLanches();

        res.render('public/pedir-lanche/pedir-lanche', {listaLanches});
    }
    

}

module.exports = inicioController;