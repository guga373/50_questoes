const readline = require("readline/promises"); // Importa o módulo readline para ler a entrada do usuário

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let str = await rl.question("Digite uma string: "); // Solicita ao usuário que digite uma string
  rl.close();

function inverterString(str) { // Define a função inverterString que recebe uma string como parâmetro
    // Converte a string em um array de caracteres, inverte o array e depois junta novamente em uma string
    return str.split("").reverse().join(""); // Retorna a string invertida usando os métodos split, reverse e join do JavaScript
}


let stringInvertida = inverterString(str); // Saída: "string invertida" (exemplo) - a string original é invertida e armazenada na variável stringInvertida
console.log("String original: " + str); // Saída: string original
console.log("String invertida: " + stringInvertida); // Saída: string invertida


}

main();

