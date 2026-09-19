let country = [
    {
        "id": "pt-PT",
        "pais": "Portugal",
        "nacionalidade": "Portuges"
    },
    {
        "id": "pt-BR",
        "pais": "Brazil",
        "nacionalidade": "Brazileiro"
    },
    {
        "id": "es-ES",
        "pais": "Espanha",
        "naciolidade": "Espanhol"
    },
    {
        "id": "fr-FR",
        "pais": "Franca",
        "nacionalidade": "Frances"
    },
    {
        "id": "en-US",
        "pais": "Estados Unidos De America",
        "nacionalidade": "Americano"
    },
    {
        "id": "en-UK",
        "pais": "Reino Unido",
        "nacionalidade": "Ingles"
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