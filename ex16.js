const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Contar de 1 a 10, mas parar em qual número? ", (entrada) => {
  let parada = Number(entrada);
  for (let i = 1; i <= 10; i++) {
    console.log(i);
    if (i === parada) break;
  }
  rl.close();
});

// Este programa conta de 1 até 10, mas interrompe a contagem
// quando atinge o número informado pelo usuário.