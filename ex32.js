const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite vários nomes separados por espaço: ', function(entrada) {
    let nomes = entrada.split(' ');
    let resultado = nomes.join(', ');

    console.log('Nomes separados por vírgula:', resultado);

    rl.close();
});

// Este programa solicita vários nomes separados por espaço,
// transforma em uma lista e depois exibe os nomes separados por vírgula.