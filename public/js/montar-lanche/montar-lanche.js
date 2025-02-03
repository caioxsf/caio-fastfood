document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('botao').addEventListener('click', montarLanche);

    function montarLanche () {
        
        let nome = document.getElementById('nome');
        let pao = document.getElementById('pao');
        let hamb = document.getElementById('hamb');
        let queijo = document.getElementById('queijo');
        let ovo = document.getElementById('ovo');
        let bacon = document.getElementById('bacon');
        let cebola = document.getElementById('cebola');
        let tomate = document.getElementById('tomate');
        let molho = document.getElementById('molho');
        let verdura = document.getElementById('verdura');

        if(pao) {
            let obj = {
                nome: nome.value,
                pao: pao.value,
                hamb: hamb.value,
                queijo: queijo.value,
                ovo: ovo.value,
                bacon: bacon.value,
                cebola: cebola.value,
                tomate: tomate.value,
                molho: molho.value,
                verdura: verdura.value
            }

            let stringfyObj = JSON.stringify(obj);

            fetch('/admin/montar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: stringfyObj
            })
            .then (r => {
                return r.json();
            })
            .then (r => {
                if(r.ok) {
                    alert(r.msg);
                    window.location.href = '/admin/montar'
                }
                else {
                    alert(r.msg)
                }
            })
            .catch (e => {
                console.error(e)
            })
        }
    }

})