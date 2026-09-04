let rl = require("readline");

let input = rl.createInterface({
	input: process.stdin,
	output: process.stdout
});

input.question("qual e o seu nome: ", (nome) => {

input.question("qual e a sua idade: ", (idade) => {

console.log(`ola ${nome}, voce tem ${idade} anos`);

input.close();

   });
});
