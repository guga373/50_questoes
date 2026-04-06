const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Digite um texto: ', (texto) => {
	const caracteres = texto.split('');
	console.log('Caracteres:', caracteres);
	rl.close();
});


// Este programa solicita um texto ao usuário, separa cada caractere
// em uma lista (array) e exibe o resultado no terminal.