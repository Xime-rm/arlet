
function Equipo(nombre) {
  this.nombre = nombre;
  this.marcador = 0;
}


let equipos = [];


function ingresarEquipo(numeroEquipo) {
  var nombre = prompt("Ingrese el nombre del equipo " + numeroEquipo + ":");
  var equipo = new Equipo(nombre);
  equipos.push(equipo);
  var marcador = parseInt(prompt("Ingrese el marcador del equipo " + numeroEquipo + ":"));
  equipo.marcador = marcador;
}

function ingresarResultados() {
  for (var i = 0; i < 3; i++) {
    console.log("Fecha " + (i + 1));
    for (var j = 0; j < equipos.length; j += 2) {
      ingresarEquipo(1);
      ingresarEquipo(2);
      console.log(equipos[0].nombre + " " + equipos[0].marcador + " - " + equipos[1].nombre + " " + equipos[1].marcador);
      console.log(equipos[2].nombre + " " + equipos[2].marcador + " - " + equipos[3].nombre + " " + equipos[3].marcador);
    }
  }
}


function mostrarRanking() {
  equipos.sort(function (a, b) {
    return b.marcador - a.marcador;
  });

  console.log("Ranking de Equipos:");
  for (var i = 0; i < equipos.length; i++) {
    console.log((i + 1) + ". " + equipos[i].nombre + " - " + equipos[i].marcador + " puntos");
  }
}

console.log("Bienvenido a la Champions League");

ingresarResultados();
mostrarRanking();


