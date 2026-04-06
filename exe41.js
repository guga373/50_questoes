const readline = require("readline/promises");

// Função que soma dois números usando Arrow Function
async function questao41() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  try {
    const a = await rl.question("Digite o primeiro número: ");
    const b = await rl.question("Digite o segundo número: ");
    // Arrow Function que soma dois valores
    const soma = (x, y) => x + y;
    console.log(`Resultado: ${soma(Number(a), Number(b))}`);
  } finally {
    rl.close();
  }
}

questao41();