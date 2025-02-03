const Database = require('../utils/database');
const db = new Database();

class molhoModel {

    #id
    #nome

    constructor (id,nome) {
        this.#id = id;
        this.#nome = nome;
    }

    get id () {return this.#id} set id (value) {this.#id = value}
    get nome () {return this.#nome} set nome (value) {this.#nome = value}

    async listarMolhos () {
        let sql = `select * from molhos`;
        let lista = [];

        let colunas = await db.ExecutaComando(sql);
        for(let i=0;i<colunas.length;i++) {
            let coluna = colunas[i];
            lista.push(new molhoModel (
                coluna['mo_id'],
                coluna['mo_nome']
            ))
        }

        return lista;
    }

}

module.exports = molhoModel;