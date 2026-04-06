const readline = require("readline/promises"); // Importa o módulo readline para ler a entrada do usuário

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let nome = await rl.question("Digite seu nome: "); // Solicita ao usuário que digite seu nome
  rl.close(); // Fecha a interface de leitura após obter a entrada do usuário

function digaOla(nome) { // Define a função digaOla que recebe o nome como parâmetro
    console.log("Olá, " + nome + "!"); // Imprime a mensagem de saudação personalizada usando o nome fornecido
}

digaOla(nome); // Saída: "Olá, 'usuário'!" ou "Olá, visitante!" se nenhum nome for fornecido


}

main();

