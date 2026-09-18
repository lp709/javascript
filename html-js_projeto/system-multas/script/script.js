let input = document.querySelector('#vel');
let message = document.querySelector('.message');
let ver = document.querySelector('#myBtn');

input.addEventListener('input', () => {

    if (input.value == "") {
        message.textContent = "";
    }

});

ver.addEventListener('click', () => {

    if (input.value == "") {
        message.textContent = "";
    } else if (input.value >= 80) {
        message.textContent = "Voce Foi Multado Por Execo De Velocidade";
    } else {
        message.textContent = "Voce Esta No Limite Tenha Uma Boa Viagem";
    }

});