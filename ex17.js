const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Digite o número para calcular o fatorial: ", (entrada) => {
  let n = Number(entrada);
  let fat = 1;
  for (let i = n; i > 1; i--) {
    fat *= i;
  }
  console.log(`O fatorial de ${n} é: ${fat}`);
  rl.close();
});

// Este programa solicita um número ao usuário e calcula seu fatorial,
// multiplicando todos os números de n até 1 e exibindo o resultado.