const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Deseja a tabuada de qual número? ", (entrada) => {
  let num = Number(entrada);
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
  rl.close();
});


// Este programa solicita um número ao usuário e exibe a tabuada desse número
// de 1 a 10 no terminal.