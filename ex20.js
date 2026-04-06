const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Digite um valor inicial para a variável: ", (entrada) => {
  let variavel = Number(entrada);
  do {
    variavel++;
    console.log("Variável incrementada para:", variavel);
  } while (variavel < 0); 
  rl.close();
});


// Este programa solicita um valor inicial e incrementa a variável
// pelo menos uma vez, continuando o processo enquanto o valor for menor que zero.