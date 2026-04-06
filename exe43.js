const readline = require("readline/promises");

// Função que recebe dois números e um callback para executar
async function questao43() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  try {
    const a = await rl.question("Digite o primeiro número: ");
    const b = await rl.question("Digite o segundo número: ");

    function operacao(a, b, callback) {
      return callback(a, b);
    }

    // Passando uma função anônima como callback que soma
    const resultado = operacao(Number(a), Number(b), function(x, y) {
      return x + y;
    });

    console.log("Resultado da operação:", resultado);
  } finally {
    rl.close();
  }
}

questao43();