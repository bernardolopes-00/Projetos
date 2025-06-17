let valor1 = 2;
let valor2 = 1;
let operação = "*";

switch (operação) {
  case "-":
    console.log(valor1 - valor2);
    break;
  case "+":
    console.log(valor1 + valor2);
    break
  case "/":
    console.log(valor1 / valor2);
    break
  case "*":
    console.log(valor1 * valor2);
    break
  default:
    console.log("Esta operação não existe");
    break
}
