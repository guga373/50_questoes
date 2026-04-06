const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite uma frase: ', function(frase) {
    let quantidadePalavras = frase.trim().split(' ').length;

    console.log('A frase possui', quantidadePalavras, 'palavra(s).');

    rl.close();
});

// Este programa solicita uma frase ao usuário, conta quantas palavras existem nela
// e exibe o total no terminal.