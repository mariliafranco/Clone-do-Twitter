class Seguir {
    constructor(){
        this.listafollow = document.getElementById("listafollow")
    }
//montar o card com os usuarios atualizados
mostraUsuario(dados){
    let carduser = ''
    dados.forEach(function(elemento){
        console.log("elemento", elemento)
        carduser += `
        <li class="tweet-card">
        <div class="tweet-content">
          <img class="tweet-card-avatar" src="${elemento.profilefoto}" alt="">
          <div class="tweet-header">
            <span class="fullname">
              <strong> ${elemento.nome}</strong> 
            </span> <br/> 
            <span class="username"> @${elemento.usuario}</span>
          </div>
          <button class="btn btn-follow">Follow</button>
        </div>
      </li> 
      `
    })
    this.listafollow.innerHTML = carduser
}
}