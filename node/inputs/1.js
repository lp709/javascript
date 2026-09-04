let rl = require("readline");

let input = rl.createInterface({
	input: process.stdin,
	output: process.stdout
});

input.question("Qual e o seu nome: ", (nome) => {
	console.log(`Bem-vindo ${nome}`)
	input.close();
});
