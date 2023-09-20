
const tipoServicio = prompt("Elija el servicio que desea (lavado o planchado):");


let tipoLavado;
if (tipoServicio.toLowerCase() === "lavado") {
  tipoLavado = parseInt(prompt("Elija el tipo de lavado que desea(1 para En seco, 2 para Normal):"));
}


const cantidadPrendas = parseInt(prompt("Ingrese la cantidad de prendas:"));


let costoTotal = 0;

if (tipoServicio.toLowerCase() === "lavado") {
  if (tipoLavado === 1) {

    costoTotal = cantidadPrendas * 2000;
  } else if (tipoLavado === 2) {

    costoTotal = cantidadPrendas * 1500;
  } else {
    console.log("Tipo de lavado no válido.");
  }
} else if (tipoServicio.toLowerCase() === "planchado") {

  costoTotal = cantidadPrendas * 1800;

  costoTotal += 3000;
} else {
  console.log("Servicio no válido.");
}


if (costoTotal > 0) {
  console.log(`El costo total del servicio es de: $${costoTotal}`);
} else {
  console.log("No se pudo realizar el calculo del costo del servicio debido a entradas no válidas.");
}
