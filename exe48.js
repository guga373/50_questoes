const readline = require("readline/promises");

// Função que soma salários usando reduce
async function questao48() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  try {
    const qtd = await rl.question("Quantos funcionários deseja cadastrar? ");
    let pessoas = [];
    for (let i = 0; i < Number(qtd); i++) {
      const nome = await rl.question(`Nome da pessoa ${i+1}: `);
      const salario = await rl.question(`Salário de ${nome}: `);
      pessoas.push({ nome, salario: Number(salario) });
    }
    // reduce acumula os salários somando
    const total = pessoas.reduce((acc, p) => acc + p.salario, 0);
    console.log("Total dos salários:", total);
  } finally {
    rl.close();
  }
}

questao48();