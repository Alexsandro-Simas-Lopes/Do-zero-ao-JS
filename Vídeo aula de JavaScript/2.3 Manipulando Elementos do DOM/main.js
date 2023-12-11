const items = document.querySelector('.items');
items.firstElementChild.remove();//firstElementChild.remove - Remove 1°Butão
items.lastElementChild.remove();//lastElementChild.remove- Remove 3°Butão
items.children[0].textContent = 'item Um';//children[0] - Seleciona na lista o texto a ser mudado 

// Alterar a cor 
const button = document.querySelector('.btn');
button.style.background = "purple"
button.style.border = "none"
button.style.color = "pink"