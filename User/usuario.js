class Usuario {
  dadosUsuario() {
    return fetch("../../filesJSON/usuario.json", { method: "get" });
  }
}
