const readline = require("readline/promises");

// Função que executa outra função duas vezes
async function questao46() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  try {
    // Pergunta a mensagem que será exibida
    const msg = await rl.question("Digite a mensagem que quer imprimir: ");

    // Função que imprime a mensagem
    const funcao = () => console.log(msg);

    // Higher-Order Function que recebe uma função e retorna outra que executa duas vezes
    const executarDuasVezes = fn => () => { fn(); fn(); };

    const novaFunc = executarDuasVezes(funcao);
    novaFunc();
  } finally {
    rl.close();
  }
}

questao46();