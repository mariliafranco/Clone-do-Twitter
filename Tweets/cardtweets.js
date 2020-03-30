class Post {
  constructor() {
    this.listapostagens = document.getElementById("listapostagens");
  }
  mostraTweets(dados) {
    let postagens = "";
    dados.forEach(function(elemento) {
      console.log("elemento", elemento);
      postagens += `
            <li class="tweet-card">
            <div class="tweet-content">
              <div class="tweet-header">
              ${elemento.retweet === "" ? "" : `<span class="retweet"> <i class="octicon octicon-sync" aria-hidden="true"></i> 
                  ${elemento.retweet}
                  </span> <br>
                `
              }
                <span class="fullname">
                  <strong>  ${elemento.nome}</strong>
                </span>
                <span class="username">${elemento.usuario}</span>
                <span class="tweet-time">${elemento.data}</span>
              </div>
              <a>
                <img class="tweet-card-avatar" src="${elemento.foto}" alt="">
              </a>
              <div class="tweet-text">
                <p class="" lang="es" data-aria-label-part="0"> ${elemento.mensagem} 
                <a href="${elemento.link}"
                    class="twitter-timeline-link" target="_blank"><span
                      class="">${elemento.link}</span></a> <a href="${elemento.link}" 
                    class="twitter-hashtag"><s></s><br><b> ${elemento.palavrachave}</b></a> 
                </p>
              </div>
              <div class="tweet-footer">
                <a class="tweet-footer-btn">
                  <i class="octicon octicon-comment" aria-hidden="true"></i><span>
                  ${elemento.comentarios}</span>
                </a>
                <a class="tweet-footer-btn">
                  <i class="octicon octicon-sync" aria-hidden="true"></i><span>
                  ${elemento.compartilhamentos}</span>
                </a>
                <a class="tweet-footer-btn">
                  <i class="octicon octicon-heart" aria-hidden="true"></i><span>
                  ${elemento.likes}</span>
                </a>
              </div>
            </div>
          </li>
            `;
    });
    this.listapostagens.innerHTML = postagens;
  }
}
