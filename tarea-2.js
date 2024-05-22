/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para
completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor 
salario anual, menor salario anual, salario anual promedio y salario mensual promedio.
 
Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
const $agregarSalario = document.querySelector("#agregar-salario");
const $eliminarSalario = document.querySelector("#eliminar-salario");
const $calcular = document.querySelector("#calcular");

$agregarSalario.onclick = function () {
  crearInputSalario();

  mostrarBtnEliminar();
  mostrarBtnCalcular();
};
$eliminarSalario.onclick = function () {
  eliminarUltimoSalario();

  if (document.querySelector("#salarios").childElementCount === 0) {
    ocultarBtnEliminar();
    ocultarBtnCalcular();
  }
};
$calcular.onclick = function () {
  mostrarResultados();
};
function mostrarBtnEliminar() {
  const $eliminarSalario = document.querySelector("#eliminar-salario");
  $eliminarSalario.classList = "";
}
function ocultarBtnEliminar() {
  const $eliminarSalario = document.querySelector("#eliminar-salario");
  $eliminarSalario.classList.add("oculto");
}
function mostrarBtnCalcular() {
  const $calcular = document.querySelector("#calcular");
  $calcular.classList = "";
}
function ocultarBtnCalcular() {
  const $calcular = document.querySelector("#calcular");
  $calcular.classList.add("oculto");
}
function eliminarUltimoSalario() {
  const $salarios = document.querySelector("#salarios");
  $salarios.lastChild.remove();
}
function crearInputSalario() {
  const $salarios = document.querySelector("#salarios");
  const cantidadSalarios = $salarios.childElementCount;

  const salarioDiv = document.createElement("div");

  const labelSalario = document.createElement("label");
  const textoLabel = document.createTextNode(`Salario # ${cantidadSalarios + 1}:`);
  labelSalario.appendChild(textoLabel);

  const inputSalario = document.createElement("input");
  inputSalario.id = `salario-${cantidadSalarios + 1}`;

  salarioDiv.appendChild(labelSalario);
  salarioDiv.appendChild(inputSalario);

  $salarios.appendChild(salarioDiv);
}
function obtenerSalariosArr() {
  let $inputsSalarios = document.querySelectorAll("input");
  let arr = [];
  for (let i = 0; i < $inputsSalarios.length; i++) {
    if ($inputsSalarios[i].value) {
      arr.push(Number($inputsSalarios[i].value));
    }
  }
  console.log(arr);
  return arr;
}
function calcularResultados() {
  let salarios = obtenerSalariosArr();

  let resultados = {
    mayorSalario: calcularMayor(salarios),
    menorSalario: calcularMenor(salarios),
    promedioSalarios: calcularPromedio(salarios),
  };

  return resultados;
}
function mostrarResultados() {
  const $mayorSalario = document.querySelector("#mayor-salario");
  const $menorSalario = document.querySelector("#menor-salario");
  const $promedioSalarios = document.querySelector("#promedio-salarios");
  const $promedioSalariosMensual = document.querySelector("#promedio-mensual-salarios");

  let resultados = calcularResultados();

  $mayorSalario.textContent += resultados.mayorSalario;
  $menorSalario.textContent += resultados.menorSalario;
  $promedioSalarios.textContent += resultados.promedioSalarios;
  $promedioSalariosMensual.textContent += (resultados.promedioSalarios / 12).toFixed(2);

  const $resultados = document.querySelector("#resultados");
  $resultados.classList = "";
}
