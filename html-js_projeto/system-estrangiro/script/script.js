//Proxima Atualizacao: acabar de meter meter os nomes no frontend, e atualizar o os objects com=ex: "idade": 15,

let search = document.querySelector('#input');
let result = document.querySelector('.result');

let country = [
    {
        "id": "pt-PT",
        "nome": "Edvaldo",
        "pais": "Portugal",
        "nacionalidade": "Portuguesa"
    },
    {
        "id": "pt-BR",
        "nome": "Esmy",
        "pais": "Brazil",
        "nacionalidade": "Brazileira"
    },
    {
        "id": "es-ES",
        "nome": "Leandro",
        "pais": "Espanha",
        "nacionalidade": "Espanhola"
    },
    {
        "id": "fr-FR",
        "nome": "Beatriz",
        "pais": "Franca",
        "nacionalidade": "Francesa"
    },
    {
        "id": "en-US",
        "nome": "Vando",
        "pais": "Estados Unidos De America",
        "nacionalidade": "Americana"
    },
    {
        "id": "stp-PT",
        "nome": "Carlos",
        "pais": "Sao Tome E Principe",
        "nacionalidade": "Saotomense"
    },
    {
        "id": "en-UK",
        "nome": "Francisco",
        "pais": "Reino Unido",
        "nacionalidade": "Inglesa"
    }
];

search.addEventListener('input', () => {
    if (search.value == "") {
        result.innerHTML = "";
    }
    else if (search.value == "id") {
        result.innerHTML = `
        ${country[0].pais}: ${country[0].id}<br>
        ${country[1].pais}: ${country[1].id}<br>
        ${country[2].pais}: ${country[2].id}<br>
        ${country[3].pais}: ${country[3].id}<br>
        ${country[4].pais}: ${country[4].id}<br>
        ${country[5].pais}: ${country[5].id}<br>
        ${country[6].pais}: ${country[6].id}
        `;
    }
    else if (search.value == "Pais" || search.value == "pais") {
        let pais = country.map(item => item.pais);
        result.innerHTML = pais.join('<br>');
    }
    else if (search.value == "Nomes" || search.value == "nomes") {
        let nomes = country.map(item => item.nome);
        result.innerHTML = nomes.join('<br>');
    }
    else if (search.value == country[0].nome || search.value == country[0].pais) {//Evaldo
        result.innerHTML = `
        Nome: ${country[0].nome}<br>
        Pais: ${country[0].pais}<br>
        Nacionalidade: ${country[0].nacionalidade}<br>
        Codigo De Lingua: ${country[0].id}
        `;
    }
    else if (search.value == country[1].nome || search.value == country[1].pais) {//Esmy
        result.innerHTML = `
        Nome: ${country[1].nome}<br>
        Pais: ${country[1].pais}<br>
        Nacionalidade: ${country[1].nacionalidade}<br>
        Codigo De Lingua: ${country[1].id}
        `;
    }
    else if (search.value == country[2].nome || search.value == country[2].pais) {//Leandro
        result.innerHTML = `
            Nome: ${country[2].nome}<br>
            Pais: ${country[2].pais}<br>
            Nacionalidade: ${country[2].nacionalidade}<br>
            Codigo De Lingua: ${country[2].id}
        `;
    }
    else if(search.value == country[3].nome || search.value == country[3].pais){//Beatriz
        result.innerHTML = `
            Nome: ${country[3].nome}<br>
            Pais: ${country[3].pais}<br>
            Nacionalidade: ${country[3].nacionalidade}<br>
            Codigo De Pais: ${country[3].id}
        `;
    }
    else if(search.value == country[4].nome || search.value == country[4].pais){//Vando
        result.innerHTML = `
            Nome: ${country[4].nome}<br>
            Pais: ${country[4].pais}<br>
            Nacionalidade: ${country[4].nacionalidade}<br>
            Codigo De Pais: ${country[4].id}
        `;
    }
    else if (search.value == "word" || search.value == "comandos") {
        result.innerHTML = `
        word ou Comandos precisos: <br>
        ${country[0].nome}<br>
        ${country[1].nome}<br>
        ${country[2].nome}<br>
        ${country[3].nome}<br>
        ${country[4].nome}<br>
        ${country[5].nome}<br>
        ${country[6].nome}<br>
        `;
    }
    else {
        let pais = country.map(item => item.pais);
        result.innerHTML = `
        <span style="color: red;">Tente isso</span><br>
        ${pais.join('<br>')};
        `;
    }
});