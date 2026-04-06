const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Somar números de 1 até quanto? ", (entrada) => {
  let limite = Number(entrada);
  let soma = 0;
  for (let i = 1; i <= limite; i++) {
    soma += i;
  }
  console.log("A soma total é:", soma);
  rl.close();
});


// Este programa solicita um número ao usuário e calcula a soma de todos
// os números de 1 até esse valor, exibindo o resultado no terminal.