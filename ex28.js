const readline = require("readline/promises"); // Importa o módulo readline para ler entradas do usuário

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let nome = await rl.question("Digite seu nome: "); // Solicita ao usuário que digite seu nome
  let idade = await rl.question("Digite sua idade: "); // Solicita ao usuário que digite sua idade
  rl.close();

function criarPessoa(nome, idade) { // Define a função criarPessoa que recebe o nome e a idade como parâmetros
  return { // Retorna um objeto com as propriedades nome e idade
    nome: nome, // A propriedade nome do objeto recebe o valor do parâmetro nome
    idade: idade, // A propriedade idade do objeto recebe o valor do parâmetro idade
  };
}


let pessoa = criarPessoa((nome), parseInt(idade)); // Chama a função criarPessoa passando o nome e a idade convertida para inteiro, e armazena o resultado na variável pessoa
console.log(pessoa); // Saída: { nome: "Matheus", idade: 20 }


}

main();

