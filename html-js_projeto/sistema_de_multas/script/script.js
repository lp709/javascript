let input = document.querySelector('#vel');
let message = document.querySelector('.message');

input.addEventListener('input', () => {

    //message.textContent = input.value; 

    if (input.value >= 80) {
        message.textContent = "Voce Foi Multado Por Execo De Velocidade";
    } else if (input.value < 79) {
        message.textContent = "Voce Esta No Limite Tenha Uma Boa Viagem";
    }

    if (input.value == "") {
        message.textContent = "";
    }

});