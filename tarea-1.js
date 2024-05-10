/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, 
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, 
borrando los inputs ya creados (investigar cómo en MDN).
*/

comenzarCuestionario();

function comenzarCuestionario() {
  let cantidadDeFamiliares = Number(prompt("Cuantas personas hay en tu grupo familiar?"));

  if (cantidadDeFamiliares) {
    crearInputsFamiliares(cantidadDeFamiliares);
    crearBotonCalcular();
    crearBotonReiniciar();
  } else {
    alert("No entendí tu respuesta, intentá nuevamente!");
    crearBotonReiniciar();
  }
}

function crearInputsFamiliares(num) {
  for (let i = 0; i < num; i++) {
    const inputEdadFamiliar = document.createElement("input");
    inputEdadFamiliar.id = `edad-familiar-${i + 1}`;
    inputEdadFamiliar.name = `edad-familiar-${i + 1}`;
    inputEdadFamiliar.setAttribute("type", "number");

    const labelFamiliar = document.createElement("label");
    labelFamiliar.setAttribute("for", `edad-familiar-${i + 1}`);
    const textoLabel = document.createTextNode(`Familiar ${i + 1}: `);
    labelFamiliar.appendChild(textoLabel);

    const div = document.createElement("div");

    const $familiares = document.querySelector("#familiares");

    div.appendChild(labelFamiliar);
    div.appendChild(inputEdadFamiliar);
    $familiares.appendChild(div);
  }
}

function crearBotonCalcular() {
  const calcularBtn = document.createElement("button");
  const textoCalcularBtn = document.createTextNode("Calcular");
  calcularBtn.id = "calcular-btn";
  calcularBtn.appendChild(textoCalcularBtn);

  calcularBtn.onclick = function () {
    mostrarResultados();
    calcularBtn.classList = "oculto";
  };

  const $botones = document.querySelector("#botones");
  $botones.appendChild(calcularBtn);
}

function crearBotonReiniciar() {
  const reiniciarBtn = document.createElement("button");
  const textoReiniciarBtn = document.createTextNode("Reiniciar");
  reiniciarBtn.id = "reiniciar-btn";
  reiniciarBtn.appendChild(textoReiniciarBtn);

  reiniciarBtn.onclick = function () {
    reiniciarCuestionario();

    comenzarCuestionario();
  };

  const $botones = document.querySelector("#botones");
  $botones.appendChild(reiniciarBtn);
}

function calcularResultados() {
  let inputsEdades = document.querySelectorAll("input");
  let edades = obtenerArrayDeValues(inputsEdades);

  let resultados = {
    mayorEdad: calcularMayor(edades),
    menorEdad: calcularMenor(edades),
    promedioEdades: calcularPromedio(edades),
  };
  return resultados;
}

function mostrarResultados() {
  let resultados = calcularResultados();

  const $mayorEdad = document.querySelector("#mayor-edad");
  const $menorEdad = document.querySelector("#menor-edad");
  const $promedioEdades = document.querySelector("#promedio-edades");

  $mayorEdad.textContent += resultados.mayorEdad;
  $menorEdad.textContent += resultados.menorEdad;
  $promedioEdades.textContent += resultados.promedioEdades;

  const $resultados = document.querySelector("#resultados");
  $resultados.classList = "";
}

function reiniciarCuestionario() {
  const $resultados = document.querySelector("#resultados");
  $resultados.classList = "oculto";
  const $mayorEdad = document.querySelector("#mayor-edad");
  $mayorEdad.textContent = "La mayor edad es: ";
  const $menorEdad = document.querySelector("#menor-edad");
  $menorEdad.textContent = "La menor edad es: ";
  const $promedioEdades = document.querySelector("#promedio-edades");
  $promedioEdades.textContent = "El promedio de las edades es: ";

  const $botones = document.querySelector("#botones");
  $botones.textContent = "";

  const $familiares = document.querySelector("#familiares");
  $familiares.textContent = "";
}

function obtenerArrayDeValues(nodelist) {
  let arr = [];
  for (let i = 0; i < nodelist.length; i++) {
    if (nodelist[i].value) {
      arr.push(Number(nodelist[i].value));
    }
  }
  return arr;
}
