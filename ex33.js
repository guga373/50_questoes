const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Digite uma lista de números separados por vírgula: ', (input) => {
	const numeros = input.split(',').map(num => Number(num.trim()));
	const dobrados = numeros.map(numero => numero * 2);
	console.log('Números dobrados:', dobrados);
	rl.close();
});

// Este programa solicita uma lista de números separados por vírgula,
// converte os valores para números, dobra cada um deles e exibe o resultado no terminal.