const readline = require("readline/promises"); // Importa o módulo readline para ler entradas do usuário

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let num = await rl.question("Digite um número: "); // Solicita ao usuário que digite um número para calcular o fatorial
  rl.close();

function fatorial(num) { // Define a função fatorial que recebe um número como parâmetro
    if (num === 0 || num === 1) { // O fatorial de 0 e 1 é 1, então se o número for 0 ou 1, a função retorna 1
        return 1; // Retorna 1 para o fatorial de 0 e 1
    }
    return num * fatorial(num - 1); // Para números maiores que 1, a função retorna o número multiplicado pelo fatorial do número anterior (num - 1), criando uma chamada recursiva até chegar a 0 ou 1.
}


console.log(fatorial(parseInt(num))); // Saída seria o fatorial do número digitado. Por exemplo, se o usuário digitar 5, a saída será 120 (5 * 4 * 3 * 2 * 1).


}

main();

