let country = [
    {
        "id": "pt-PT",
        "pais": "Portugal",
        "nacionalidade": "Portuguesa"
    },
    {
        "id": "pt-BR",
        "pais": "Brazil",
        "nacionalidade": "Brazileira"
    },
    {
        "id": "es-ES",
        "pais": "Espanha",
        "naciolidade": "Espanhola"
    },
    {
        "id": "fr-FR",
        "pais": "Franca",
        "nacionalidade": "Francesa"
    },
    {
        "id": "en-US",
        "pais": "Estados Unidos De America",
        "nacionalidade": "Americana"
    },
    {
        "id": "en-UK",
        "pais": "Reino Unido",
        "nacionalidade": "Inglesa"
    }
]

if(!country[0]){
    console.log(`Codigo De Pais: ${country[0].id}`);
    console.log(`Pais: ${country[0].pais}`);
    console.log(`Nacionalidade: ${country[0].nacionalidade}`);
} else if(country[1]){
    console.log(`Codigo De Pais: ${country[1].id}`);
    console.log(`Pais: ${country[1].pais}`);
    console.log(`Nacionalidade: ${country[1].nacionalidade}`);
}
