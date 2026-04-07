
const readline = require("readline/promises");

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let numero1 = await rl.question("Digite numero1: ");
  let numero2 = await rl.question("Digite numero2: ");
  numero1 = Number(numero1);
  numero2 = Number(numero2);
  rl.close();

  console.log(`Número 1: ${numero1}`);
  console.log(`Número 2: ${numero2}`);

  if(numero1 > numero2){
    console.log(`O maior número é o numero um: ${numero1}`);
  } else {
    console.log(`O maior número é o numero dois: ${numero2}`);
  }

}

main();

// Este programa solicita dois números ao usuário, exibe os valores digitados
// e informa qual deles é o maior. 
