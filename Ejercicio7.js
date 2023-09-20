
const estado = Number(prompt(" elija 1. para devolucion, 2. para perdida "));

let valorRevistas = 500;
let valorLibro = 600;
let valorPerdida = 10000;
let respuesta = "";
let totalPagar = 0;

switch (estado) {
  case 1:
    let diasReetraso = Number(prompt(" ingrese los dias de retraso "));
    const cantidadPrestamo = Number(prompt(" elija 1.para libros ,2. para revistas  "));
    switch (cantidadPrestamo) {
      case 1:
        totalPagar = cantidadPrestamo * diasReetraso * valorLibro;
        respuesta = `el costo total a pagar por libro es $${totalPagar}`;
        break;
      case 2:
        totalPagar = cantidadPrestamo * valorRevistas * diasReetraso;
        respuesta = `el costo total a pagar por revista  es $${totalPagar}`;

        break;

      default:
        break;
    }

    break;
  case 2:
    totalPagar = valorPerdida;
    respuesta = `el valor total a pagar por perdida del libro es de $${totalPagar}`;
    break;

  default:
    break;
}

alert(respuesta);
