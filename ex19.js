const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Digite números separados por vírgula: ", (entrada) => {
  let numeros = entrada.split(",").map(num => Number(num.trim()));
  let maior = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) maior = numeros[i];
  }
  console.log("O maior valor é:", maior);
  rl.close();
});


// Este programa solicita vários números separados por vírgula,
// converte-os em uma lista e identifica qual é o maior valor,
// exibindo o resultado no terminal.