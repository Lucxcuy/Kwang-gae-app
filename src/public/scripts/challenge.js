//DEFINO LOS DESAFIOS
const challenge = [
	{"6 puntos con dollyo n2p": 2},
	{"dos blitz": 2},
	{"la combinacion puño, puño, puño, dolyo 2 veces": 3},
	{"3 puntos con una patada zona alta": 3},
	{"un contragolpe con giro tip": 2},
	{"dos contragolpes con giro tip": 3},
	{"tres contragolpes con giro tip": 5},
	{"un contragolpe con giro gancho": 2},
	{"un contragolpe con giro gancho": 3},
	{"dos contragolpes con giro gancho": 5},
	{"tres contragolpes con giro gancho": 5},
	{"2 puntos con patada descendente": 3},
	{"4 puntos con patada descendente": 4},
	{"3 puntos con una patada descendente": 4},
	{"que el rival se detenga 3 veces por una yop": 2},
	{"que el rival reciba 3 advertencias por salida": 3},
	{"que el rival retroceda 3 veces por tus amagues": 2},
	{"un punteo con yop y pegar gancho a la cabeza": 4},
	{"un punteo con yop y pegar dolyo a la cabeza con la misma pierna": 4},
	{"un doble punteo con yop y pegar dolyo con la otra pierna": 3},
	{"un esquive por debajo de una yop": 3},
	{"tres contragolpes a una yop del rival": 5},
	{"tres contragolpes a un dollyo del rival": 5},
	{"convertir un punteo en una descendente que puntue": 5},
	{"terminar una pelea sin recibir un solo punto": 5},
	{"terminar una pelea habiendo conseguido mas de 10 puntos": 5},
	{"que el rival te haga 2 puntos al empezar el combate y luego ganar": 3},
	{"que el rival te haga 1 punto al empezar el combate y luego ganar": 2},
	{"que el rival te haga 3 puntos al empezar el combate y luego ganar": 4},
	{"que el rival te haga 4 puntos al empezar el combate y luego ganar": 5},
	{"que el rival te haga 5 puntos al empezar el combate y luego ganar": 6},
	{"una mariposa que puntue": 3},
	{"tres giros seguidos y que por lo menos uno conecte": 4},
	{"puntos con yop, dollyos y puños en la misma pelea": 3},
	{"un antcipo a un dolyo con blitz": 2},
	{"dos anticipos a dolyos con blitz": 3},
	{"tres anticipos a dolyos con blitz": 4},
	{"una yop al cabezal": 2},
	{"un golpe de nudillo descendente, con o sin salto": 2},
	{"un esquive a un blitz saltando hacia atrás con golpe de nudillo": 4},
	{"puntos solo con patadas a zona alta y ganar": 5},
	{"puntos solo con puños y ganar": 5}
];

function sumaPuntos(puntos) {

	let puntosTotales = JSON.parse(localStorage.getItem("puntosTotales"));
	let suma = parseInt(puntosTotales + puntos);
	localStorage.setItem("puntosTotales", JSON.stringify(suma));


	let puntosView = document.getElementById("puntos");
	puntosView.innerHTML = `Hasta ahora has conseguido ${suma} puntos.`

	}

  // ELIJO LA FORMA EN BASE A LA DECISION DEL USUARIO
function elegirChallenge() {
	const listaDesafios = challenge;
	const listaPuntos = challenge;
	let desafioElegido;
	let random = 0;

	random = Math.floor(Math.random() * listaDesafios.length);
	desafioElegido = Object.keys(listaDesafios[random]);
	puntosElegido = Object.values(listaPuntos[random]);

	saveTask(desafioElegido, puntosElegido);
	}

// function borrar() {
// 	const result = document.getElementById("result");
// 	result.innerText = "";
// }

function saveTask (desafio, puntos) {

	if (localStorage.getItem("puntos") === null) {
		let puntajes = [];
		puntajes.push(puntos);
		localStorage.setItem("puntos", JSON.stringify(puntajes));
	} else {
		let puntajes = JSON.parse(localStorage.getItem("puntos"));
		puntajes.push(puntos);
		localStorage.setItem("puntos", JSON.stringify(puntajes));

	}

	if (localStorage.getItem("desafios") === null) {
		let desafios = [];
		desafios.push(desafio);
		localStorage.setItem("desafios", JSON.stringify(desafios));
	} else {
		let desafios = JSON.parse(localStorage.getItem("desafios"));
		desafios.push(desafio);
		localStorage.setItem("desafios", JSON.stringify(desafios));

	}

	getTasks();
};

function getTasks() {
	if (localStorage.getItem("desafios") != null) {
		let desafios = JSON.parse(localStorage.getItem("desafios"));
		let puntos = JSON.parse(localStorage.getItem("puntos"));
		let challengesView = document.getElementById("desafios");

		challengesView.innerHTML = "";

		for(let i = 0; i < desafios.length; i++) {
			let desafio = desafios[i];
			let punto = puntos[i];

			challengesView.innerHTML += `<div class="card mb-4 text-center">
			<div class="card-body">
				<p>Tienes que hacer ${desafio}.</p>
				<p><b>RECOMPENSA: ${punto} puntos</b></p>
				<a onclick='endTask("${i}", "false")' class="btn btn-danger">Fallado</a>
				<a onclick='endTask("${i}", "true")' class="btn btn-primary">Completado</a>
			</div>
			</div>`
		}
	}
};

function endTask(posicion, status) {
	let desafios = JSON.parse(localStorage.getItem("desafios"));
	let puntos = JSON.parse(localStorage.getItem("puntos"));

	if (status == "false") {
		desafios.splice(posicion, 1);
		puntos.splice(posicion, 1);
	} else {
		sumaPuntos(parseInt(puntos[posicion]))
		desafios.splice(posicion, 1);
		puntos.splice(posicion, 1);
	}

	localStorage.setItem("desafios", JSON.stringify(desafios));
	localStorage.setItem("puntos", JSON.stringify(puntos));
	getTasks();
};

getTasks();
sumaPuntos(0);