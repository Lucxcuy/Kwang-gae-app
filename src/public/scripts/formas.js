//DEFINO LAS LISTAS DE FORMAS
const formas = [
  "Chon-Ji",
  "Dangun",
  "Dosan",
  "Won Hyo",
  "Yulgok",
  "Joon Gun",
  "Toi Gye",
  "Hwarang",
  "Choong Moo",
];

// Formas por separado
const formasPrimero = ["Kwang Gae", "Po Eun", "Gae Baek"];
const formasSegundo = ["Eu Iam", "Juche", "Choong Jang"];
const formasTercero = ["Yoo Sin", "Choi Jong", "Sam Il"];
const formasCuarto = ["Moon Moo", "Ul Ji", "Yon Gae"];

// Formas Unidas
const formasGupPrimero = formas.concat(formasPrimero);
const formasPriSegundo = formasGupPrimero.concat(formasSegundo);
const formasPriSegTercero = formasPriSegundo.concat(formasTercero);
const formasPriSegTerCuarto = formasPriSegTercero.concat(formasCuarto);

// DEFINO LA LISTA A UTILIZAR
function grado() {
  const grado = document.querySelector('input[name="grado"]:checked').value;
  let listaDeFormas;
  if (grado == "1") {
    listaDeFormas = formasGupPrimero;
  } else if (grado == "2") {
    listaDeFormas = formasPriSegundo;
  } else if (grado == "3") {
    listaDeFormas = formasPriSegTercero;
  } else if (grado == "4") {
    listaDeFormas = formasPriSegTerCuarto;
  }
  return listaDeFormas;
}

// DEFINO LA LISTA DE FORMAS POR SEPARADO EN CASO DE SER NECESARIO
function soloGrado() {
  let grado = document.querySelector('input[name="grado"]:checked').value;

  let listaSoloGrado;

  if (grado == "1") {
    listaSoloGrado = formasPrimero;
  } else if (grado == "2") {
    listaSoloGrado = formasSegundo;
  } else if (grado == "3") {
    listaSoloGrado = formasTercero;
  } else if (grado == "4") {
    listaSoloGrado = formasCuarto;
  }
  return listaSoloGrado;
}

// ELIJO LA FORMA EN BASE A LA DECISION DEL USUARIO
function elegirFormas() {
  const lista = grado();
  const listaSoloGrado = soloGrado();
  const result = document.getElementById("result");
  const cantidad = document.querySelector(
    'input[name="cantidad"]:checked'
  ).value;

  let eleccion;
  let random = 0;
  let random2 = 0;
  let random3 = 0;

  while (random == random2 || random == random3 || random2 == random3) {
    random = Math.floor(Math.random() * lista.length);
    random2 = Math.floor(Math.random() * lista.length);
    random3 = Math.floor(Math.random() * lista.length);
  }

  if (cantidad == 2) {
    eleccion = lista[random];
    result.innerText = `La forma elegida es ${eleccion}`;
  } else if (cantidad == 3) {
    eleccion = `${lista[random]} y ${lista[random2]}`;
    result.innerText = `Las formas elegidas son ${eleccion}`;
  } else if (cantidad == 4) {
    eleccion = `${lista[random]} , ${lista[random2]} y ${lista[random3]}`;
    result.innerText = `Las formas elegidas son ${eleccion}`;
  } else if (cantidad == 0) {
    random = Math.floor(Math.random() * listaSoloGrado.length);
    eleccion = `${listaSoloGrado[random]}`;
    result.innerText = `La forma elegida es ${eleccion}`;
  } else if (cantidad == 1) {
    random = Math.floor(Math.random() * listaSoloGrado.length);
    while (listaSoloGrado[random] == lista[random2]) {
      random = Math.floor(Math.random() * listaSoloGrado.length);
      random2 = Math.floor(Math.random() * lista.length);
    }
    eleccion = `${listaSoloGrado[random]} y ${lista[random2]}`;
    result.innerText = `Las formas elegidas son ${eleccion}`;
  }
}
