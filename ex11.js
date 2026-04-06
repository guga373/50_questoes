const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Pressione enter para imprimir os números de 1 a 10: ", (entrada) => {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  rl.close();
});

// Este programa aguarda o usuário pressionar Enter e, em seguida,
// imprime os números de 1 a 10 no terminal usando um laço de repetição.