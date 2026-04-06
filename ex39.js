const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Digite números separados por vírgula: ', (input) => {
	const numeros = input.split(',').map(num => Number(num.trim()));
	numeros.sort((a, b) => a - b);
	console.log('Números ordenados:', numeros);
	rl.close();
});


// Este programa solicita uma lista de números separados por vírgula,
// converte para um array, ordena os valores em ordem crescente
// e exibe o resultado no terminal.