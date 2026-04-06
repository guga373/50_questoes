const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Digite números separados por vírgula: ', (input) => {
	const numeros = input.split(',').map(num => Number(num.trim()));
	const maiorQueDez = numeros.find(numero => numero > 10);
	console.log('Primeiro número maior que 10:', maiorQueDez);
	rl.close();
});

// Este programa solicita uma lista de números separados por vírgula,
// converte para um array e encontra o primeiro número maior que 10,
// exibindo o resultado no terminal.