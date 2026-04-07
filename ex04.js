const readline = require("readline/promises");

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let usuario = await rl.question("Digite seu usuário: ");
  let senha = await rl.question("Digite sua senha: ");


  const usuarioCorreto = "gustavo";
  const senhaCorreta = "12345"; 


  senha = senha.toString();
  usuario = usuario.toString();
  rl.close();

  console.log(`Olá ${usuario}!`);

  if(senha == senhaCorreta && usuario == usuarioCorreto){
    console.log("acesso liberado")
}else{
    console.log("acesso negado")
}

}

main();

// Este programa solicita um usuário e uma senha, compara com valores
// pré-definidos e informa se o acesso foi liberado ou negado.
