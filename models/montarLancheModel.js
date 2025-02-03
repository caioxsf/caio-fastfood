const Database = require('../utils/database')
const db = new Database();

class montarLancheModel {

    #id
    #nome
    #bacon
    #carnes
    #carnes_qtd
    #cebola
    #molhos
    #ovo
    #ovo_qtd
    #paes
    #queijos
    #tomate
    #verduras_legumes

    constructor (id,nome,bacon,carnes,carnes_qtd,cebola,molhos,ovo,ovo_qtd,paes,queijos,tomate,verduras_legumes) {
        this.#id = id;
        this.#nome = nome;
        this.#bacon = bacon;
        this.#carnes = carnes;
        this.#carnes_qtd = carnes_qtd;
        this.#cebola = cebola;
        this.#molhos = molhos;
        this.#ovo = ovo;
        this.#ovo_qtd = ovo_qtd;
        this.#paes = paes;
        this.#queijos = queijos;
        this.#tomate = tomate;
        this.#verduras_legumes = verduras_legumes;
    }

    get id () {return this.#id} set id (value) {this.#id = value}
    get nome () {return this.#nome} set nome (value) {this.#nome = value}
    get bacon () {return this.#bacon} set bacon (value) {this.#bacon = value}
    get carnes () {return this.#carnes} set carnes (value) {this.#carnes = value}
    get carnes_qtd () {return this.#carnes_qtd} set carnes_qtd (value) {this.#carnes_qtd = value}
    get cebola () {return this.#cebola} set cebola (value) {this.#cebola = value}
    get molhos () {return this.#molhos} set molhos (value) {this.#molhos = value}
    get ovo () {return this.#ovo} set ovo (value) {this.#ovo = value}
    get ovo_qtd () {return this.#ovo_qtd} set ovo_qtd (value) {this.#ovo_qtd = value}
    get paes () {return this.#paes} set paes (value) {this.#paes = value}
    get queijos () {return this.#queijos} set queijos (value) {this.#queijos = value}
    get tomate () {return this.#tomate} set tomate (value) {this.#tomate = value}
    get verduras_legumes () {return this.#verduras_legumes} set verduras_legumes (value) {this.#verduras_legumes = value}

    

}

module.exports = montarLancheModel
