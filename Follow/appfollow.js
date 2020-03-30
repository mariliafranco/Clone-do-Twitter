const objetoFollow = new Follow ();
const objetoCard = new Seguir ();

objetoFollow.buscaUsuario()
    .then (function (resposta){
    resposta.json()
    .then (function (dados){
        objetoCard.mostraUsuario(dados)
    })
    })