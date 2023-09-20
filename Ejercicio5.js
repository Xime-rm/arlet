
const tamañoSticker = prompt("Ingrese el tamaño del sticker (pequeño o grande):");


let costoPorSticker;

if (tamañoSticker.toLowerCase() === "pequeño") {
  costoPorSticker = 4000;
} else if (tamañoSticker.toLowerCase() === "grande") {
  costoPorSticker = 6000;
} else {
  console.log("Tamaño de sticker no válido.");
}

let cantidadStickers = parseInt(prompt("Ingrese la cantidad de stickers (mínimo 10):"));


while (cantidadStickers < 10) {
  console.log("La cantidad mínima de stickers es 10. Por favor, ingrese un número correcto.");
  cantidadStickers = parseInt(prompt("Ingrese la cantidad de stickers (mínimo 10):"));
}


const costoTotal = cantidadStickers * costoPorSticker;


console.log(`El costo total de ${cantidadStickers} stickers de tamaño ${tamañoSticker} es: $${costoTotal}`);
