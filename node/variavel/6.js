let age, name, add, country;

age = "20";
age = Number(age);
name = "Leandro";
add = "Street Gabriel Francisco";
country = "USA";

// FORMA MAIS DIFICIL
let info = [   
    // FORMA MAIS DIFICIL
{
    "age": age,
    "name": name,
    "add": add,
    "country": country
},

    //FORMA MAIS FACIL
{
    age,
    name,
    add,
    country
}
]

console.log(info[0].country);