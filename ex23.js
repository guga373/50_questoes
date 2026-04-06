const readline = require("readline/promises"); // Importa o módulo readline para ler a entrada do usuário

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

let nome = await rl.question("Digite seu nome: "); // Solicita ao usuário que digite seu nome
rl.close();

function ola (nome) { // Define a função ola que recebe o nome como parâmetro
    return "Olá, " + nome + "!"; // Retorna a saudação personalizada usando o nome fornecido
}

console.log("Mensagem de saudação: " + ola(nome)); // Saída: "Mensagem de saudação: Olá, 'usuário'!"


}

main();

