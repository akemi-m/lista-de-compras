import gerarDiaDaSemana from "./gerarDiaDaSemana.js";

const inputItem = document.getElementById("input-item");
let contador = 0;

export function criarItemDaLista() {
  if (inputItem.value === "") {
    alert("Por favor, insira um item!");

    // interrompe
    return;
  }

  const itemDaLista = document.createElement("li");
  const containerItemDaLista = document.createElement("div");
  const inputCheckbox = document.createElement("input");
  const nomeItem = document.createElement("p");
  const itemData = document.createElement("p");

  // adicionar classe
  containerItemDaLista.className = "lista-item-container";
  // adicionar o type
  inputCheckbox.type = "checkbox";
  // adicionar o id
  inputCheckbox.id = "checkbox-" + contador++;
  // adicionar como innerText do p o valor do input
  nomeItem.innerText = inputItem.value;

  // riscar o nome na lista
  inputCheckbox.addEventListener("click", () => {
    if (inputCheckbox.checked) {
      nomeItem.style.textDecoration = "line-through";
    } else {
      nomeItem.style.textDecoration = "none";
    }
  });

  // adicionar input e p no div
  containerItemDaLista.appendChild(inputCheckbox);
  containerItemDaLista.appendChild(nomeItem);

  // colocar o div dentro da lista
  itemDaLista.appendChild(containerItemDaLista);

  const dataCompleta = gerarDiaDaSemana();

  // adicionar como innerText do p o valor da dataCompleta
  itemData.innerText = dataCompleta;

  // adicionar a classe texto-data
  itemData.className = "texto-data";

  // adicionar à lista de itens a data completa
  itemDaLista.appendChild(itemData);

  return itemDaLista;
}
