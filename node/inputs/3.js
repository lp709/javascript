let rl = require("readline");

let input = rl.createInterface({
	input:  process.stdin,
	output: process.stdout
});

input.question("qual e o seu nome", (nome) => {

input.question("qual e a sua morada: ", (morada) => {

	console.log(`Ola ${nome}, entao tu moras em ${morada}`);
	input.close();

});
});
