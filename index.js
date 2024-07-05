const mapaParaRaton = [
  [2, 0, 0, 1, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 0, 0, 1, 1, 1],
  [0, 1, 0, 1, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 0, 0, 1, 6],
  [0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
  [0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
];

const ubicacionDelRaton = (coordenada) => {
  let ratonx = mapaParaRaton.findIndex((x) => x.includes(2));
  let ratony = mapaParaRaton[ratonx].indexOf(2);
  return coordenada == "y" ? ratony : ratonx;
};
const visionDelRaton = (direccion) => {
  let bordeLaberinto = {
    arriba: 0,
    izquierda: 0,
    derecha: mapaParaRaton.length - 1,
    abajo: mapaParaRaton.length - 1,
  };
  let dentroDelLaberinto = {
    arriba: {
      x: -1,
      y: 0,
    },
    izquierda: {
      x: 0,
      y: -1,
    },
    derecha: {
      x: 0,
      y: 1,
    },
    abajo: {
      x: 1,
      y: 0,
    },
  };
  if (
    ubicacionDelRaton("x") == bordeLaberinto[direccion] ||
    ubicacionDelRaton("y") == bordeLaberinto[direccion]
  ) {
    return 1;
  } else {
    return mapaParaRaton[
      ubicacionDelRaton("x") + dentroDelLaberinto[direccion].x
    ][ubicacionDelRaton("y") + dentroDelLaberinto[direccion].y];
  }
};
let salida = 6;
while ((salida = 6)) {
  salida = salida + 1;
  console.log(salida);
}
//console.log(ratonIndiceY())
//console.log(visionDelRaton('abajo'))
//console.log(arribaDelRaton())
//console.log(abajoDelRaton())
//console.log(derechaDelRaton())
//console.log(izquierdaDelRaton())
