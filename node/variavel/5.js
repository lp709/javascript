let media = 25;

const nota1 = 8;
const nota2 = 25;

const $ = nota1 > nota2 ? `Parabens voce aprovou, a sua media e :${(nota1 + nota2) / 2}`:`Infelizmente voce nao aprovou, a sua media e: ${(nota1 + nota2) / 2}`;

console.log($)
console.log(`Para passar de ano a sua media tinha que ser no: ${(media *= 2) / 2}`);
