const Database = require('../utils/database');
const db = new Database();

class tomateModel {

    #id
    #nome

    constructor (id,nome) {
        this.#id = id;
        this.#nome = nome;
    }

    get id () {return this.#id} set id (value) {this.#id = value}
    get nome () {return this.#nome} set nome (value) {this.#nome = value}

    async listarTomate () {
        let sql = `select * from tomate`;
        let lista = [];

        let colunas = await db.ExecutaComando(sql);
        for(let i=0;i<colunas.length;i++) {
            let coluna = colunas[i];
            lista.push(new tomateModel (
                coluna['to_id'],
                coluna['to_nome']
            ))
        }

        return lista;
    }

}

module.exports = tomateModel;