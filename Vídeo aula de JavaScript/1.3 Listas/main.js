const names = ["Felipe", "João", "Brenda", 10, false];

//Seleciona Nome segundo sua posição na lista names
const selectName = names[4];
console.log(selectName);

//Adiciona o nome no final da Lista names
names.push("Pedro");
console.log(names);

//Adiciona o nome no início da lista names
names.unshift("Rafaella");
console.log(names);

//Deleta ultima variavel da lista
// names.pop();

//Muda o nome na posição definida
names [4] =  "Gustavo";
names [5] = "Lima";

//Indica onde esta Gstavo na Lista
console.log(names.indexOf("Gustavo"));

//Organiza a Lista em Ordem alfabetica
const ListaOrdenada = names.sort();
console.log(names);
console.log(ListaOrdenada);

// Identifica se o nome é ou não uma variavel
const nomeLista = Array.isArray(names);
console.log(nomeLista)