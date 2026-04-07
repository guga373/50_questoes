const readline = require("readline/promises");

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let a = await rl.question("Digite o primeiro lado: ");
  let b = await rl.question("Digite o segundo lado: ");
  let c = await rl.question("Digite o terceiro lado: ");
    a = Number(a);
    b = Number(b);
    c = Number(c);
  rl.close();
  classificarTriangulo(a, b, c);

}
function classificarTriangulo(a, b, c) {
if (a + b > c && a + c > b && b + c > a)
    
    if(a === b && b === c){
        console.log("triangulo equilatero");
    }
    else if (a === b || a === c || b === c){
        console.log("triangulo isosceles");
    }
    else {
        console.log("triangulo escaleno");
    }
    else{
     console.log("Os lados não formam um triângulo");
 }


}   




//(5,5,5) → Equilátero
//(5,5,3) → Isósceles
//(4,5,6) → Escaleno
//(1,2,5) → Não forma triângulo
main();



// Este programa solicita três valores ao usuário, verifica se eles podem formar
// um triângulo e, caso formem, classifica como equilátero, isósceles ou escaleno.
// Caso contrário, informa que não é possível formar um triângulo.
