const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Digite números separados por vírgula: ', (input) => {
	const numeros = input.split(',').map(num => Number(num.trim()));
	const pares = numeros.filter(numero => numero % 2 === 0);
	console.log('Números pares:', pares);
	rl.close();
});

// Este programa solicita uma lista de números separados por vírgula,
// converte para um array e filtra apenas os números pares,
// exibindo o resultado no terminal.