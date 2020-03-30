class Tweets {
  buscaTweets() {
    return fetch("../../filesJSON/tweets.json", { method: "get" });
  }
}
