const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Imprimir pares até quanto? ", (entrada) => {
  let limite = Number(entrada);
  for (let i = 0; i <= limite; i++) {
    if (i % 2 !== 0) continue;
    console.log(i);
  }
  rl.close();
});

// Este programa solicita um número ao usuário e imprime todos os números pares
// de 0 até esse valor usando um laço de repetição.