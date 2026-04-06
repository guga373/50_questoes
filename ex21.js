const readline = require("readline/promises"); // Importa o módulo readline para ler entradas do usuário

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let num1 = await rl.question("Digite o primeiro número: "); // Solicita ao usuário que digite o primeiro número
  let num2 = await rl.question("Digite o segundo número: "); // Solicita ao usuário que digite o segundo número
  rl.close();

function soma(num1, num2) { // Define a função soma que recebe dois números como parâmetros
    return num1 + num2; // Retorna a soma dos dois números
}

console.log("A soma dos números é: " + soma(parseFloat(num1), parseFloat(num2))); // Saída: A soma dos números é: 15 (exemplo)

}

main();


