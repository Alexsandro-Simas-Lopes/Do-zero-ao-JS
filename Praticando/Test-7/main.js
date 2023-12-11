function listarButtonsComValue() {
    const buttons = document.querySelectorAll('button'); // Seleciona todos os elementos <button>
    const buttonsComValue = [];
    console.log(buttons);
    for (const button of buttons) {
        const value = button.getAttribute('value'); // Obtém o valor do atributo 'value'
        
        if (value !== null) {
            const name = button.textContent; // Obtém o texto dentro do botão como o nome
            buttonsComValue.push({ name, value });
        }
    }return buttonsComValue;  
}
const buttonsComValue = listarButtonsComValue();
console.log('Botões com atributo "value" e seus nomes:');
buttonsComValue.forEach(button => {
    const btn = document.querySelector(".btn")
    console.log(`Nome: ${button.name}, Valor: ${button.value}`);
});
function mostrarValor(button) {
    const value = button.getAttribute('value');
    console.log(`${value} selecionado`);
}

let btn_cam = document.getElementById("collapseCamera"); //Botão Abrir menu

let botao = document.querySelector('#toggleButton');

btn_cam.addEventListener("click", function (e) //função para quando o botão HTMl for clicado!
{   e.preventDefault();
    botao = [0];
});

    function informarEstadoColapso() {
        const botao = document.querySelector('#collapseExample');
        if (botao.classList.contains('show')) {
            console.log(botao.id + ' está fechado.');
        } else {
            console.log(botao.id + ' está aberto.');
        }
    }document.querySelector('#toggleButton').addEventListener('click', informarEstadoColapso);
// submitButton.addEventListener("click", function (e) {
//     e.preventDefault();
    

//     const btn = clickButton.value;
//     const value = button.getAttribute('value');
//     var clicked = document.getElementById(e);
    
//     if (btn == clicked) {
//         console.log(`${value} selecionado!`);
//     }   
// });


// $('[has-ripple="true"]').click(function () {
//     $(this).toggleClass('clicked');
//     $('.menu').toggleClass('open');
// });