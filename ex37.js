const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Digite frutas separadas por vírgula: ', (input) => {
	const frutas = input.split(',').map(fruta => fruta.trim());
	const possuiMaca = frutas.includes('Maçã');
	console.log('Possui Maçã?', possuiMaca);
	rl.close();
});

// Este programa solicita uma lista de frutas separadas por vírgula,
// transforma em um array e verifica se "Maçã" está presente,
// exibindo true ou false no terminal.