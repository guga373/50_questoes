const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Iniciar contagem regressiva de quanto? ", (entrada) => {
  let i = Number(entrada);
  while (i >= 0) {
    console.log(i);
    i--;
  }
  rl.close();
});

// Este programa solicita um número ao usuário e realiza uma contagem regressiva
// até 0, exibindo cada número no terminal.