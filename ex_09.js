const readline = require("readline/promises");

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let valorCompra = await rl.question("Digite o valor da compra: ");  
  valorCompra

  rl.close();


  if(valorCompra > 100){
    let desconto = valorCompra * 0.10;
    let valorFinal = valorCompra - desconto;
    console.log("desconto aplicado ");
    console.log("valor final: R$: " + valorFinal);
}else{
    console.log("valor sem desconto");
    console.log("valor final: R$" + valorCompra);
}


}
main();


// Este programa solicita o valor de uma compra e verifica se é maior que 100.
// Caso seja, aplica um desconto de 10% e mostra o valor final.
// Caso contrário, exibe o valor original sem desconto.