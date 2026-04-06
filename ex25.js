const readline = require("readline/promises"); // Importa o módulo readline para ler a entrada do usuário

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let array = await rl.question("Digite os números separados por vírgula: "); // Solicita ao usuário que digite os números separados por vírgula
  rl.close();

 function arraySum(array) { // Define a função arraySum que recebe um array de números como parâmetro
    let sum = 0; // Inicializa a variável sum para armazenar a soma dos elementos do array
    for (let i = 0; i < array.length; i++) { // Itera sobre cada elemento do array usando um loop for
        sum += array[i]; // Adiciona o valor do elemento atual do array à variável sum
    }
    return sum; // Retorna a soma total dos elementos do array
}

console.log("A soma dos números é: " + arraySum(array.split(",").map(Number))); // Saída: A soma dos números é: 15 (exemplo)


}

main();

