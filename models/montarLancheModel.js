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

    async montarLanche () {
        let sql = `insert into lanches (lan_nome, bacon, carnes, cebola, molhos, ovo, paes, queijos, tomate, verduras_legumes) values (?,?,?,?,?,?,?,?,?,?)`
        let valores = [this.#nome, this.#bacon, this.#carnes, this.#cebola, this.#molhos, this.#ovo, this.#paes, this.#queijos, this.#tomate, this.#verduras_legumes];
        let resultado = await db.ExecutaComandoNonQuery(sql,valores);
        return resultado;
    }

    async listarLanches () {
        let sql = `select * from lanches`;
        let lista = [];

        let colunas = await db.ExecutaComando(sql);
        for(let i=0;i<colunas.length;i++) {
            let coluna = colunas[i];
            lista.push(new montarLancheModel (
                coluna['lan_id'],
                coluna['lan_nome'],
                coluna['bacon'],
                coluna['carnes'],
                coluna['cebola'],
                coluna['molhos'],
                coluna['ovo'],
                coluna['paes'],
                coluna['queijos'],
                coluna['tomate'],
                coluna['verduras_legumes']
            ))
        }

        return lista;
    }

    async listarIngredientes () {
        let sql = `select bac_nome, car_nome, ce_nome, mo_nome, ovo_nome, paes_nome, que_nome, to_nome, ver_nome from lanches lan inner join bacon bac on lan.bacon = bac_id
        inner join carnes car on lan.carnes = car_id
        inner join cebola ce on lan.cebola = ce_id
        inner join molhos mo on lan.molhos = mo_id
        inner join ovo ovo on lan.ovo = ovo_id
        inner join paes paes on lan.paes = paes_id
        inner join queijos que on lan.queijos = que_id
        inner join tomate tom on lan.tomate = to_id
        inner join verduras_legumes ver on lan.verduras_legumes = ver_id`;
        let lista = [];

        let colunas = await db.ExecutaComando(sql);
        for(let i=0;i<colunas.length;i++) {
            let coluna = colunas[i];
            lista.push(new montarLancheModel (
                coluna['bac_nome'],
                coluna['car_nome'],
                coluna['ce_nome'],
                coluna['mo_nome'],
                coluna['ovo_nome'],
                coluna['paes_nome'],
                coluna['que_nome'],
                coluna['to_nome'],
                coluna['ver_nome']
            ))
        }

        return lista;
    }

}

module.exports = montarLancheModel
