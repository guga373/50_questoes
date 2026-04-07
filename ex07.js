const readline = require("readline/promises");

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  
  let nome = await rl.question("Digite seu nome: ");
  let idade = await rl.question("Digite sua idade: ");
  let peso = await rl.question("Digite seu peso (kg): ");
  let altura = await rl.question("Digite sua altura (m): ");
  let imc = peso / (altura * altura);

  imc = Number(imc);
  nome = nome.toString();
  idade = Number(idade);
  peso = Number(peso);
  altura = Number(altura);  
  rl.close();

  console.log(`Olá ${nome}! Você tem ${idade} anos.`);
  console.log(`Seu IMC é ${imc.toFixed(2)}.`);


  function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
   if(imc < 18.5)
        return "abaixo do peso";
    else if (imc < 25)
        return "peso normal";
    else if (imc < 30)
        return "acima do peso";

    else return "obesidade";



}

console.log (calcularIMC(55,1.75));

}
main();

// Este programa solicita dados do usuário (nome, idade, peso e altura),
// calcula o IMC, exibe o valor e também classifica o IMC com base em faixas definidas.
