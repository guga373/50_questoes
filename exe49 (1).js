const readline = require("readline/promises");

// Função que cria multiplicadores usando closure
async function questao49() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  try {
    const m = await rl.question("Digite o multiplicador: ");
    const criarMultiplicador = mult => n => n * mult;
    const multiplicar = criarMultiplicador(Number(m));
    const n = await rl.question("Digite o número a multiplicar: ");
    console.log("Resultado:", multiplicar(Number(n)));
  } finally {
    rl.close();
  }
}

questao49();

// Este programa solicita um número multiplicador e cria uma função (closure)
// que aplica esse multiplicador a outro número informado pelo usuário,
// exibindo o resultado da multiplicação no terminal.