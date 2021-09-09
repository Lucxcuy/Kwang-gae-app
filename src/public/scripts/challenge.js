//DEFINO LOS DESAFIOS
const challenge = [
	"6 puntos con dollyo n2p",
	"dos blitz n2p",
	"la combinacion puño, puño, puño, dolyo 2 veces 3p",
	"3 puntos con una patada zona alta 3p",
	"un contragolpe con giro tip 2p",
	"dos contragolpes con giro tip 3p",
	"tres contragolpes con giro tip 5p",
	"un contragolpe con giro gancho 2p",
	"un contragolpe con giro gancho 3p",
	"dos contragolpes con giro gancho 5p",
	"tres contragolpes con giro gancho 5p",
	"2 puntos con patada descendente 3p",
	"4 puntos con patada descendente 4p",
	"3 puntos con una patada descendente 4p",
	"que el rival se detenga 3 veces por una yop 2p",
	"que el rival reciba 3 advertencias por salida 3p",
	"que el rival retroceda 3 veces por tus amagues 2p",
	"un punteo con yop y pegar gancho a la cabeza 4p",
	"un punteo con yop y pegar dolyo a la cabeza con la misma pierna 4p",
	"un doble punteo con yop y pegar dolyo con la otra pierna 3p",
	"un esquive por debajo de una yop 3p",
	"tres contragolpes a una yop del rival 5p",
	"tres contragolpes a un dollyo del rival 5p",
	"convertir un punteo en una descendente que puntue 5p",
	"terminar una pelea sin recibir un solo punto 5p",
	"terminar una pelea habiendo conseguido mas de 10 puntos 5p",
	"que el rival te haga 2 puntos al empezar el combate y luego ganar 3p",
	"que el rival te haga 1 punto al empezar el combate y luego ganar 2p",
	"que el rival te haga 3 puntos al empezar el combate y luego ganar 4p",
	"que el rival te haga 4 puntos al empezar el combate y luego ganar 5p",
	"que el rival te haga 5 puntos al empezar el combate y luego ganar 6p",
	"una mariposa que puntue 3p",
	"tres giros seguidos y que por lo menos uno conecte 4p",
	"puntos con yop, dollyos y puños en la misma pelea 3p",
	"un antcipo a un dolyo con blitz 2p",
	"dos anticipos a dolyos con blitz 3p",
	"tres anticipos a dolyos con blitz 4p",
	"una yop al cabezal 2p",
	"un golpe de nudillo descendente, con o sin salto 2p",
	"un esquive a un blitz saltando hacia atrás con golpe de nudillo 4p",
	"puntos solo con patadas a zona alta y ganar 5p",
	"puntos solo con puños y ganar 5p",
];

  // ELIJO LA FORMA EN BASE A LA DECISION DEL USUARIO
function elegirChallenge() {
	const lista = challenge;
	const result = document.getElementById("result");

	let eleccion;
	let random = 0;
	random = Math.floor(Math.random() * challenge.length);
	eleccion = lista[random];
	saveTask(eleccion);
	}

// function borrar() {
// 	const result = document.getElementById("result");
// 	result.innerText = "";
// }

function saveTask (eleccion) {

	if (localStorage.getItem("desafios") === null) {
		let desafios = [];
		desafios.push(eleccion);
		localStorage.setItem("desafios", JSON.stringify(desafios));
	} else {
		let desafios = JSON.parse(localStorage.getItem("desafios"));
		desafios.push(eleccion);
		localStorage.setItem("desafios", JSON.stringify(desafios));

	}

	getTasks();
};

function getTasks() {
	let desafios = JSON.parse(localStorage.getItem("desafios"));
	let challengesView = document.getElementById("desafios");

	challengesView.innerHTML = "";

	for(let i = 0; i < desafios.length; i++) {
		let desafio = desafios[i];

		challengesView.innerHTML += `<div class="card mb-4 text-center">
		<div class="card-body">
			<p>Tienes que hacer ${desafio}</p>
			<a onclick='deleteTask("${desafio}")' class="btn btn-danger">Eliminar</a>
			<a onclick='deleteTask("${desafio}")' class="btn btn-primary">Eliminar</a>
		</div>
		</div>`
	}
};

function deleteTask(desafio) {
	let desafios = JSON.parse(localStorage.getItem("desafios"));
	for(let i = 0; i < desafios.length; i++) {
		if (desafios[i] == desafio) {
			desafios.splice(i, 1);
		}
	}

	localStorage.setItem("desafios", JSON.stringify(desafios));
	getTasks();
};

getTasks();