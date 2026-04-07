const readline = require("readline/promises");

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let dia = await rl.question("Digite o dia da semana (1-7): ");
  dia = dia.toString();
  rl.close();

  console.log(`O dia ${dia} é ${getDiaSemana(dia)}.`);


}

function getDiaSemana(dia) {
  switch (dia) {
    case "1":
      return "segunda";
    case "2":
      return "terça";
    case "3":
      return "quarta";
    case "4":
      return "quinta";
    case "5":
      return "sexta";
    case "6":
      return "sabado";
    case "7":
      return "domingo";
    default:
      return "este dia não existe";
  }
}


main();


// Este programa solicita um número de 1 a 7 ao usuário e retorna
// o dia da semana correspondente. Caso o número seja inválido,
// informa que o dia não existe.
