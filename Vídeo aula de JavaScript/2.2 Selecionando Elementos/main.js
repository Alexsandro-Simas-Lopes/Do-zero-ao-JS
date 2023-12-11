//getElementById - Só altera a string em "Id"
const videoAula12 = document.getElementById('videoAula');//Não precisa de "#" para identificar o "Id"
console.log(videoAula12);
videoAula12.innerText = "LOGIN"//Com getElementById usa-se innerText para alterar o texto

//getElementByClassName - Só altera a string em "class"

//querySelector - Altera a string em "Id" e "class"
const subTituloInner = document.querySelector('.subTitulo')//Precida de "#" ou "." para identificar a string
console.log(subTituloInner);
subTituloInner.textContent = "Entre já!"//Com querySelector usa-se textContent para alterar texto

const myForm = document.querySelector(".container #my-Form");// Por alterar tanto "Id" como "class"
console.log(myForm);//Posso acessar o "id" pela class mãe

//Seleção de Multiplos Elementos
const allItems = document.querySelectorAll(".item");
console.log(allItems);