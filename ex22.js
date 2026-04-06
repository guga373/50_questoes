const readline = require("readline/promises"); // Importa o módulo readline para ler entradas do usuário

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let base = await rl.question("Digite a base do retângulo: "); // Solicita ao usuário que digite a base do retângulo
  let altura = await rl.question("Digite a altura do retângulo: "); // Solicita ao usuário que digite a altura do retângulo
  rl.close();

function areaRetangulo(base, altura) { // Define a função areaRetangulo que recebe a base e a altura como parâmetros
    return base * altura; // Retorna a área do retângulo calculada multiplicando a base pela altura
}

console.log("A área do retângulo é: " + areaRetangulo(parseFloat(base), parseFloat(altura))); // Saída: A área do retângulo é: 50 (exemplo)

}

main();




