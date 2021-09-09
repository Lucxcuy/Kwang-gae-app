let redTotal = 0;
let blueTotal = 0;
let redWarning = 0;
let blueWarning = 0;
let redDiscount = 0;
let blueDiscount = 0;
let fightStatus = "ended";

function startFight() {
	if (fightStatus=="ended"){
		const resultRed = document.getElementById("resultadoRed");
		const resultBlue = document.getElementById("resultadoBlue");
		const status = document.getElementById("status");


		resultRed.innerText = "";
		resultBlue.innerText = "";
		status.innerText = "Combate iniciado"

		fightStatus = "running";
		redTotal = 0;
		blueTotal = 0;
		redWarning = 0;
		blueWarning = 0;
		redDiscount = 0;
		blueDiscount = 0;
	};
};

function warning(color) {
	if (fightStatus == "running") {
		if (color == "red") {
			redWarning +=1;
			if (redWarning == 3) {
				redScore(-1);
				redWarning = 0;
			};
		} else if (color == "blue") {
			blueWarning +=1;
			if (blueWarning == 3) {
				blueScore(-1);
				blueWarning = 0;
			};
		};
	};
}

function discount(color) {
	if (fightStatus == "running") {
		if (color == "red") {
			redDiscount += 1;
			redScore(-1);
			if (redDiscount == 3) {
				redTotal = "DQ";
				endFight();
			}
		} else if (color == "blue") {
			blueDiscount += 1;
			blueScore(-1);
			if (blueDiscount == 3) {
				blueTotal = "DQ";
				endFight();
			};
		};
	};
}


function redScore(points) {
	if (fightStatus == "running") {
		redTotal += points;
		console.log(redTotal);
	};
};

function blueScore(points) {
	if (fightStatus == "running") {
		blueTotal += points;
		console.log(blueTotal);
	};
};

function endFight() {
	const resultRed = document.getElementById("resultadoRed");
	const resultBlue = document.getElementById("resultadoBlue");
	const status = document.getElementById("status");

	resultRed.innerText = redTotal;
	resultBlue.innerText = blueTotal;
	status.innerText = "Combate terminado"

	fightStatus= "ended";
};