
const valorCasa = parseFloat(prompt("Ingrese el valor de la casa:"));


const tipoInmueble = parseInt(prompt("Ingrese el tipo de inmueble (1 para Usado, 2 para Nuevo):"));


let comision = 0;
if (tipoInmueble === 1) {

  comision = valorCasa * 0.1;
} else if (tipoInmueble === 2) {

  comision = valorCasa * 0.12;
} else {
  console.log("Tipo de inmueble no válido o no encontrado.");
}


const valorPropietario = valorCasa - comision;
const costoInmobiliaria = comision;


if (comision > 0) {
  console.log(`El valor recibido por el propietario es de: $${valorPropietario}`);
  console.log(`El valor recibido por la inmobiliaria es de: $${costoInmobiliaria}`);
} else {
  console.log("No se pudo realizar el calculo de la comisión respectiva debido a un tipo de inmueble no válido.");
}
