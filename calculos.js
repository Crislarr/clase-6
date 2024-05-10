function calcularMayor(array) {
  let mayor = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > mayor) {
      mayor = array[i];
    }
  }
  return mayor;
}

function calcularMenor(array) {
  let menor = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < menor) {
      menor = array[i];
    }
  }
  return menor;
}

function calcularPromedio(array) {
  let suma = 0;

  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }

  return suma / array.length;
}
