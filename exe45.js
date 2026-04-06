// 45
const readline = require("readline/promises");

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let entrada = await rl.question("Digite números separados por espaço: ");
  let arr = entrada.split(" ").map(Number);

  arr.forEach(n => console.log(n));

  rl.close();
}
main();

// Este programa solicita números separados por espaço, converte a entrada
// em um array de números e imprime cada valor individualmente no terminal.