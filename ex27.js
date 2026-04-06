const readline = require("readline/promises"); // Importa o módulo readline para ler a entrada do usuário

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let num = await rl.question("Digite um número: "); // Solicita ao usuário que digite um número
  rl.close();

function numeroPrimo(num) { // Define a função numeroPrimo que recebe um número como parâmetro
    if (num <= 1) return false; // Números menores ou iguais a 1 não são primos
    for (let i = 2; i <= Math.sqrt(num); i++) { // Verifica se o número é divisível por algum número entre 2 e a raiz quadrada do número
        if (num % i === 0) return false; // Se o número for divisível por algum desses números, ele não é primo, então retorna false
    }
    return true; // Se o número não for divisível por nenhum desses números, ele é primo, então retorna true
}

console.log("O número é primo: " + numeroPrimo(num)); // Saída: true se o número for primo, false caso contrário.


}

main();

