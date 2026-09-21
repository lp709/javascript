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
        "naciolidade": "Espanhola"
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

//Pegar so os nome
let nomes = country.map(item => item.nome);
console.log(nomes);