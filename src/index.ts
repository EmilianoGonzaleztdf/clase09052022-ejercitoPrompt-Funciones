let base: number = Number(prompt("ingrese el valor de base"));
let altura: number = Number(prompt("ingrese el valor de altura"));

function calcularAreaTriangulo(base: number, altura: number): number {
  return (base * altura) / 2;
}
calcularAreaTriangulo(base, altura);
