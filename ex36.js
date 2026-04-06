const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Digite números separados por vírgula: ', (input) => {
	const numeros = input.split(',').map(num => Number(num.trim()));
	const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
	console.log('Soma dos números:', soma);
	rl.close();
});


// Este programa solicita uma lista de números separados por vírgula,
// converte para um array e calcula a soma de todos os valores,
// exibindo o resultado no terminal.