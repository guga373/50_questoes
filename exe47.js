const readline = require("readline/promises");

// Função que filtra números pares e eleva ao quadrado
async function questao47() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  try {
    const entrada = await rl.question("Digite números separados por vírgula: ");
    const arr = entrada.split(",").map(n => Number(n.trim()));
    // filter pega apenas os pares, map eleva ao quadrado
    const resultado = arr.filter(n => n % 2 === 0).map(n => n * n);
    console.log("Resultado:", resultado);
  } finally {
    rl.close();
  }
}

questao47();