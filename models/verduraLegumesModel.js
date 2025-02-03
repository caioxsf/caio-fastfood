const Database = require('../utils/database');
const db = new Database();

class verduraLegumesModel {

    #id
    #nome

    constructor (id,nome) {
        this.#id = id;
        this.#nome = nome;
    }

    get id () {return this.#id} set id (value) {this.#id = value}
    get nome () {return this.#nome} set nome (value) {this.#nome = value}

    async listarVerduraLegumes () {
        let sql = `select * from verduras_legumes`;
        let lista = [];

        let colunas = await db.ExecutaComando(sql);
        for(let i=0;i<colunas.length;i++) {
            let coluna = colunas[i];
            lista.push(new verduraLegumesModel (
                coluna['ve_id'],
                coluna['ve_nome']
            ))
        }

        return lista;
    }

}

module.exports = verduraLegumesModel;