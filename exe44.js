const readline = require("readline/promises");

// Função que imprime uma mensagem após um tempo usando setTimeout
async function questao44() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  try {
    const msg = await rl.question("Digite a mensagem: ");
    const tempo = await rl.question("Digite o tempo em milissegundos: ");
    // setTimeout espera o tempo e executa a função arrow
    setTimeout(() => console.log(msg), Number(tempo));
  } finally {
    rl.close();
  }
}

questao44();