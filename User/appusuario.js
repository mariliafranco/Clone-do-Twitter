const objetoUsuario = new Usuario ();
const objetoCardUsuario = new Info ();

objetoUsuario.dadosUsuario()
.then (function (resposta){
     resposta.json()
    .then(function (dados){
        objetoCardUsuario.mostraUser(dados)
    })
})