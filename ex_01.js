const readline = require("readline/promises");

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });


  let numero = await rl.question("Digite um número: ");
  numero = Number(numero);

if(numero % 2 == 0){
    console.log("este numero é par")
}else{
    console.log("este numero é impar")
}

  

  console.log(`seu número ${numero}.`);

 rl.close();
}

main();

// Este programa solicita um número ao usuário, verifica se ele é par ou ímpar
// e exibe o resultado no terminal, encerrando a execução em seguida.