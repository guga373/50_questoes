const readline = require("readline/promises");

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let ano = await rl.question("Digite o ano: ");
  ano = Number(ano);

  rl.close();

  let resultado = ehBissexto(ano);
  console.log(`O ano ${ano} ${resultado}.`);

function ehBissexto(ano) {

    if((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0){
        return "é bissexto";
}else {
    return "n é bissexto"
    }

console.log(ehBissexto(2025)); // Não é bissexto
console.log(ehBissexto(1900)); // Não é bissexto
console.log(ehBissexto(2000)); // É bissexto


}
}
main();

// Este programa solicita um ano ao usuário, verifica se ele é bissexto
// usando regras matemáticas e exibe o resultado no terminal.