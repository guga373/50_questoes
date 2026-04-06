const readline = require("readline/promises");

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let idade = await rl.question("Digite sua idade: ");
  idade = Number(idade);
  rl.close();


  console.log( 'Você tem ' + idade + ' anos.' );



if(idade >= 16){
    console.log("pode votar")
}else{
    console.log("não pode votar")
}
  }


main();

// Este programa solicita a idade do usuário, mostra a idade digitada
// e verifica se ele pode votar com base na idade (16 anos ou mais).