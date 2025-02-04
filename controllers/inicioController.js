const montarLancheModel = require("../models/montarLancheModel");
const baconModel = require("../models/baconModel");
const carnesModel = require("../models/carnesModel");
const cebolaModel = require("../models/cebolaModel");
const molhoModel = require("../models/molhoModel");
const ovoModel = require("../models/ovoModel");
const paesModel = require("../models/paesModel");
const queijosModel = require("../models/queijosModel");
const tomateModel = require("../models/tomateModel");
const verduraLegumesModel = require("../models/verduraLegumesModel");

class inicioController {

    inicioView(req,res) {
        res.render('public/inicio')
    }

    async pedirView(req,res) {
        let lanchesModel = new montarLancheModel();
        let listaLanches = await lanchesModel.listarLanches();

        res.render('public/pedir-lanche/pedir-lanche', {listaLanches});
    }
    
    async cardapioView (req,res) {
        let lanchesModel = new montarLancheModel();
        let listaLanches = await lanchesModel.listarLanches();

        let bacon = new baconModel();
        let listaBacon = await bacon.listarBancon();

        let carnes = new carnesModel();
        let listaCarnes = await carnes.listarCarnes();

        let cebola = new cebolaModel();
        let listaCebola = await cebola.listarCebola();

        let molho = new molhoModel();
        let listaMolho = await molho.listarMolhos();

        let ovo = new ovoModel();
        let listaOvo = await ovo.listarOvo();

        let paes = new paesModel();
        let listaPaes = await paes.listarPaes();

        let queijos = new queijosModel();
        let listaQueijos = await queijos.listarQueijos();

        let tomate = new tomateModel();
        let listaTomate = await tomate.listarTomate();

        let verduraLegumes = new verduraLegumesModel();
        let listaVerduraLegumes = await verduraLegumes.listarVerduraLegumes();

        let listaIngredientes = await lanchesModel.listarIngredientes();

        res.render('public/cardapio/cardapio', {listaLanches, listaBacon, listaCarnes, listaCebola, listaMolho, listaOvo, listaPaes, listaQueijos, listaTomate, listaVerduraLegumes, listaIngredientes})
    }

}

module.exports = inicioController;