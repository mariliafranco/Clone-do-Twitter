const objetoTweet = new Tweets();
const objetoCardTweets = new Post();

objetoTweet.buscaTweets().then(function(resposta) {
  resposta.json().then(function(dados) {
    objetoCardTweets.mostraTweets(dados);
  });
});
