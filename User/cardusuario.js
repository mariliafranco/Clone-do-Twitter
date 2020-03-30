class Info {
  constructor() {
    this.nome = document.getElementById("nome");
    this.usuario = document.getElementById("username");
    this.local = document.getElementById("local");
    this.cadastro = document.getElementById("primeirologin");
    this.quantidade_tweets = document.getElementById("tweets");
    this.seguindo = document.getElementById("following");
    this.seguidores = document.getElementById("followers");
    this.likes = document.getElementById("likes");
  }
  mostraUser(dados) {
    this.nome.innerText = dados[0].nome;
    this.usuario.innerText = dados[0].usuario;
    this.local.innerText = dados[0].local;
    this.cadastro.innerText = dados[0].cadastro;
    this.quantidade_tweets = dados[0].quantidades_tweets;
    this.seguindo.innerText = dados[0].seguindo;
    this.seguidores.innerText = dados[0].seguidores;
    this.likes.innerText = dados[0].likes;
  }
}
