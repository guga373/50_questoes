const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um texto com espaços no início ou no final: ', function(texto) {
    let textoSemEspacos = texto.trim();

    console.log('Texto sem espaços extras:', textoSemEspacos);

    rl.close();
});

// Este programa solicita um texto ao usuário, remove espaços em branco
// do início e do final da frase e exibe o resultado no terminal.