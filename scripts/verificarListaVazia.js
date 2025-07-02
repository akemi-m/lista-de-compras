// querySelector: via id é #nomeDoId e classe é .nomeDaClasse
const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia(listaDeCompras) {
  // retornar um array
  const itensDaLista = listaDeCompras.querySelectorAll("li");

  if (itensDaLista.length === 0) {
    // aparecer
    mensagemListaVazia.style.display = "block";
  } else {
    // sumir
    mensagemListaVazia.style.display = "none";
  }
}

export default verificarListaVazia;
