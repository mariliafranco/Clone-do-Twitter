class Follow {
  buscaUsuario() {
    return fetch("../../filesJSON/follow.json", { method: "get" });
  }
}
