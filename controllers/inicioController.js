class inicioController {

    inicioView(req,res) {
        res.render('public/inicio')
    }

    pedirView(req,res) {
        res.render('public/pedir-lanche/pedir-lanche')
    }

}

module.exports = inicioController;