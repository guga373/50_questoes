const readline = require("readline/promises"); // Importa o módulo readline para ler a entrada do usuário

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let celsius = await rl.question("Digite a temperatura em Celsius: "); // Solicita ao usuário que digite a temperatura em Celsius
  rl.close();

function celsiusToFahrenheit(celsius) { // Define a função celsiusToFahrenheit que recebe a temperatura em Celsius como parâmetro
    return (celsius * 9/5) + 32; // Retorna a temperatura convertida para Fahrenheit usando a fórmula de conversão
}

console.log("A temperatura em Fahrenheit é: " + celsiusToFahrenheit(parseFloat(celsius))); // Saída: A temperatura em Fahrenheit é: 59 (exemplo)


}

main();

