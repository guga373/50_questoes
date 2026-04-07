const readline = require("readline/promises");

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let letra = await rl.question("Digite uma letra: ");
  letra = letra.toLowerCase();
  rl.close();

  verificarLetra(letra);


}

function verificarLetra(letra){
    letra = letra.toLowerCase();

if(letra.length !== 1 || !/[a-z]/.test(letra)){
    console.log("digite apenas uma letra");
 } 
else if ("aeiou".includes(letra)){
    console.log("vogal");
 }
else{
    console.log("consoante");
 }
}
main();

// Este programa solicita uma letra ao usuário, verifica se a entrada é válida
// e informa se ela é uma vogal ou uma consoante. Caso não seja uma única letra,
// exibe uma mensagem de erro.
