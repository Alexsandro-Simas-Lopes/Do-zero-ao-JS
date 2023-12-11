// nameInput.addEventListener("change", function (event) {
//     console.log(event.target.value); //change mostra o "event.target.value" por uma mudança direta
// });

// const myForm = document.querySelector('#my-Form');
// const items = document.querySelector('.item');
// const body = document.querySelector("body");

const submitButton = document.querySelector('#submitSave');
submitButton.addEventListener("click", function (e) {
    e.preventDefault();

    // console.log("clicked!");
    const emailInput = document.querySelector('#exampleInputEmail1');
    const senhaInput = document.querySelector('#exampleInputPassword1');

    const emailValue = emailInput.value;
    const senhaValue = senhaInput.value;
    
    if (emailValue === "" || senhaValue === "") {
       return alert("Please fill out all the fields!\n(Por favor preencha todos os campos)");
    }

    // myForm.style.background = "green";
    // myForm.style.color = "white";
    // items.firstElementChild.textContent = emailValue;
    // items.children[1].textContent = emailValue;

    // body.style.background = "black";
});


