let rl = require("readline");

let input = rl.createInterface({
	input: process.stdin,
	output: process.stdout
});

input.question("Quel e o seu nome: ", (res) => {
	console.log(`ola senhor ${res} seja muito bemvindo`);
	input.close();
});
