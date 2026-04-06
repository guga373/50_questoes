const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Quantos números da sequência de Fibonacci deseja ver? ", (entrada) => {
  let qtd = Number(entrada);
  let a = 0, b = 1;
  for (let i = 1; i <= qtd; i++) {
    console.log(a);
    let prox = a + b;
    a = b;
    b = prox;
  }
  rl.close();
});

// Este programa solicita uma quantidade ao usuário e exibe os primeiros
// números da sequência de Fibonacci no terminal.