const productsCart = [
  {
    id: 1,
    name: "Uva Crimson",
    price: 44.99,
  },
  {
    id: 2,
    name: "Vinho Canção",
    price: 17.98,
  },
  {
    id: 3,
    name: "Água de coco",
    price: 8.99,
  },
  {
    id: 4,
    name: "Mamão",
    price: 9.98,
  },
  {
    id: 5,
    name: "Água tônica",
    price: 17.98,
  },
];

function soma() {
  let soma = 0;

  for (let i = 0; i < productsCart.length; i++) {
    soma += productsCart[i].price;
  }

  soma = soma.toLocaleString("pt-br", { style: "currency", currency: "BRL" });

  return soma;
}

let main = document.createElement("main");
document.getElementsByTagName("body")[0].append(main);

let ul = document.createElement("ul");
ul.classList.add("ProductList");

let liCabecalho = document.createElement("li");
liCabecalho.classList.add("headerList");

let itemCabecalho = document.createElement("p");
let textoItemCabecalho = document.createTextNode("Item");
itemCabecalho.appendChild(textoItemCabecalho);

let valorCabecalho = document.createElement("p");
let textoValorCabecalho = document.createTextNode("Valor");
valorCabecalho.appendChild(textoValorCabecalho);

liCabecalho.appendChild(itemCabecalho);
liCabecalho.appendChild(valorCabecalho);

ul.append(liCabecalho);

for (let i = 0; i < productsCart.length; i++) {
  let li = document.createElement("li");
  li.classList.add("ProductDetails");

  let p1 = document.createElement("p");
  let nomeProduto = document.createTextNode(productsCart[i].name);
  p1.appendChild(nomeProduto);

  let valorFormatado = productsCart[i].price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  let p2 = document.createElement("p");
  let valorProduto = document.createTextNode(valorFormatado);
  p2.appendChild(valorProduto);

  li.appendChild(p1);
  li.appendChild(p2);

  ul.append(li);
}

let liTotal = document.createElement("li");
liTotal.classList.add("total");

let p1 = document.createElement("p");
let total = document.createTextNode("Total");
p1.appendChild(total);

let p2 = document.createElement("p");
let somaProdutos = document.createTextNode(soma());
p2.appendChild(somaProdutos);

liTotal.appendChild(p1);
liTotal.appendChild(p2);

ul.append(liTotal);

document.getElementsByTagName("main")[0].append(ul);

let button = document.createElement("button");
button.classList.add("ButtonEnd");

let textoBotao = document.createTextNode("Finalizar compra");
button.append(textoBotao);

document.getElementsByTagName("main")[0].append(button);
