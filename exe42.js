const readline = require("readline/promises");

// Função que calcula o quadrado de um número
async function questao42() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  try {
    const n = await rl.question("Digite um número: ");
    // Arrow Function com retorno implícito
    const quadrado = x => x * x;
    console.log(`Resultado: ${quadrado(Number(n))}`);
  } finally {
    rl.close();
  }
}

questao42();