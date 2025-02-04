const baconModel = require("../models/baconModel");
const carnesModel = require("../models/carnesModel");
const cebolaModel = require("../models/cebolaModel");
const molhoModel = require("../models/molhoModel");
const montarLancheModel = require("../models/montarLancheModel");
const ovoModel = require("../models/ovoModel");
const paesModel = require("../models/paesModel");
const queijosModel = require("../models/queijosModel");
const tomateModel = require("../models/tomateModel");
const verduraLegumesModel = require("../models/verduraLegumesModel");


class adminController {

    async montarLancheView (req,res) {
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

        res.render("private/montar-lanche/montar-lanche", {listaBacon, listaCarnes, listaCebola, listaMolho, listaOvo, listaPaes, listaQueijos, listaTomate, listaVerduraLegumes})
    }

    async montarLanchePost (req,res) {
        let ok;
        if(req.body.pao) {
            let montarLanche = new montarLancheModel();
            montarLanche.nome = req.body.nome;
            montarLanche.paes = req.body.pao;
            montarLanche.carnes = req.body.hamb;
            montarLanche.queijos = req.body.queijo;
            montarLanche.ovo = req.body.ovo;
            montarLanche.bacon = req.body.bacon;
            montarLanche.cebola = req.body.cebola;
            montarLanche.tomate = req.body.tomate;
            montarLanche.molhos = req.body.molho;
            montarLanche.verduras_legumes = req.body.verdura;

            let resultado = await montarLanche.montarLanche();
            if(resultado) {
                res.send({ok: true, msg: 'Lanche montado com sucesso!'})
            }
            else {
                res.send({ok: false, msg: 'Erro ao montar lanche!'})
            }
        }
    }

    async adminView(req,res) {
        res.render('private/tela-admin/admin')
    }



}

module.exports = adminController