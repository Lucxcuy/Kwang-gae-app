// VARIABLES

let redTotal = 10;
let blueTotal = 10;
let redCounterLvl1 = 0;
let blueCounterLvl1 = 0;
let redCounterLvl2 = 0;
let blueCounterLvl2 = 0;
let redCounterLvl3 = 0;
let blueCounterLvl3 = 0;
let lastRedLvl1 = 0;
let lastBlueLvl1 = 0;
let fightStatus = "ended";
let redUndoLvl2 = false;
let redUndoLvl3 = false;
let blueUndoLvl2 = false;
let blueUndoLvl3 = false;

// PUNTOS COMPETIDOR ROJO

function redLvl1(points) {
    redCounterLvl1 += 1;
    if (fightStatus == "running" && redCounterLvl1 <= 30) {
        redTotal -= points;
        lastRedLvl1 = 0.2;
        if (redTotal <= 0) {
            lastRedLvl1 = 10;
        }
        console.log(redTotal);
        console.log(redCounterLvl1);
    }
}

function redLvl2(points) {
    const red = document.getElementById("red");

    if (redTotal > 0) {
        redCounterLvl2 += 1;
        if (redCounterLvl2 >= 5) {
            redCounterLvl2 = 5;
        }

        if (fightStatus == "running" && redCounterLvl2 <= 4) {
            redUndoLvl2 = true;
            redTotal += points;

            red.innerText = `x${redCounterLvl2}`;

            console.log(redTotal);
            console.log(redCounterLvl2);
        }
    }
}

function redLvl3(points) {
    const red = document.getElementById("red");

    if (redTotal > 0) {
        redCounterLvl3 += 1;
        if (redCounterLvl3 >= 5) {
            redCounterLvl3 = 5;
        }

        if (fightStatus == "running" && redCounterLvl3 <= 4) {
            redUndoLvl3 = true;
            redTotal += points;
            red.innerText = `x${redCounterLvl3}`;

            console.log(redTotal);
        }
    }
}

// PUNTOS COMPETIDOR AZUL

function blueLvl1(points) {
    blueCounterLvl1 += 1;
    if (fightStatus == "running" && blueCounterLvl1 <= 30) {
        blueTotal -= points;
        lastBlueLvl1 = 0.2;
        if (blueTotal <= 0) {
            lastBlueLvl1 = 10;
        }

        console.log(blueTotal);
    }
}

function blueLvl2(points) {
    const blue = document.getElementById("blue");

    if (blueTotal > 0) {
        blueCounterLvl2 += 1;
        if (blueCounterLvl2 >= 5) {
            blueCounterLvl2 = 5;
        }

        if (fightStatus == "running" && blueCounterLvl2 <= 4) {
            blueUndoLvl2 = true;
            blueTotal += points;

            blue.innerText = `x${blueCounterLvl2}`;

            console.log(blueTotal);
            console.log(blueCounterLvl2);
        }
    }
}

function blueLvl3(points) {
    const blue = document.getElementById("blue");
    if (blueTotal > 0) {
        blueCounterLvl3 += 1;
        if (blueCounterLvl3 >= 5) {
            blueCounterLvl3 = 5;
        }
    }

    if (fightStatus == "running" && blueCounterLvl3 <= 4) {
        blueUndoLvl3 = true;
        blueTotal += points;

        blue.innerText = `x${blueCounterLvl3}`;

        console.log(blueTotal);
        console.log(blueCounterLvl3);
    }
}

// DESHACER ULTIMO PUNTO

function undoLvl1(color) {
    if (color == "red") {
        redTotal += lastRedLvl1;
        lastRedLvl1 = 0;

        console.log(redTotal);
        console.log(lastRedLvl1);
    }

    if (color == "blue") {
        blueTotal += lastBlueLvl1;
        lastBlueLvl1 = 0;

        console.log(blueTotal);
        console.log(blueCounterLvl2);
    }
}

function undoLvl2(color) {
    if (color == "red" && redUndoLvl2) {
        const red = document.getElementById("red");
        if (redCounterLvl2 >= 5) {
            redCounterLvl2 -= 2;
        } else {
            redCounterLvl2 -= 1;
        }
        redTotal += 0.5;
        red.innerText = `x${redCounterLvl2}`;
        redUndoLvl2 = false;

        console.log(redTotal);
        console.log(redCounterLvl2);
    }

    if (color == "blue" && blueUndoLvl2) {
        const blue = document.getElementById("blue");
        if (blueCounterLvl2 >= 5) {
            blueCounterLvl2 -= 2;
        } else {
            blueCounterLvl2 -= 1;
        }
        blueTotal += 0.5;
        blue.innerText = `x${blueCounterLvl2}`;
        blueUndoLvl2 = false;

        console.log(blueTotal);
        console.log(blueCounterLvl2);
    }
}

function undoLvl3(color) {
    if (color == "red" && redUndoLvl3) {
        const red = document.getElementById("red");
        if (redCounterLvl3 >= 5) {
            redCounterLvl3 -= 2;
        } else {
            redCounterLvl3 -= 1;
        }
        redTotal += 0.5;
        red.innerText = `x${redCounterLvl3}`;
        redUndoLvl3 = false;

        console.log(redTotal);
        console.log(redCounterLvl3);
    }

    if (color == "blue" && blueUndoLvl3) {
        const blue = document.getElementById("blue");
        if (blueCounterLvl3 >= 5) {
            blueCounterLvl3 -= 2;
        } else {
            blueCounterLvl3 -= 1;
        }
        blueTotal += 0.5;
        blue.innerText = `x${blueCounterLvl3}`;
        blueUndoLvl3 = false;

        console.log(blueTotal);
        console.log(blueCounterLvl3);
    }
}

// NIVELES

function startMatch(level) {
    if (fightStatus == "ended") {
        const display = document.getElementById("display");
        const resultRed = document.getElementById("resultadoRed");
        const resultBlue = document.getElementById("resultadoBlue");
        const status = document.getElementById("status");

        resultRed.innerText = "";
        resultBlue.innerText = "";
        status.innerText = "Match Started";

        fightStatus = "running";

        if (level == 1) {
            display.innerHTML = `<div id="display" class="container">
			<h3 class="text-center text-white" id="status">LVL 1</h3>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-6 mb-2">
					<div class="btn-group-vertical">

						<button class="btn btn-danger btn-lg btn-block mt-3 mb-2" type="button"
							onclick="redLvl1(0.2)">-0.2</button>
						<button class="btn btn-danger btn-lg btn-block mb-2" type="button"
							onclick="redLvl1(10)">-10</button>
						<button class="btn btn-danger btn-lg btn-block mb-2" type="button"
							onclick="undoLvl1('red')">Undo</button>
					</div>
				</div>
				<div class="col-6 mb-2">
					<div class="btn-group-vertical">

						<button class="btn btn-primary btn-lg btn-block mt-3 mb-2" type="button"
							onclick="blueLvl1(0.2)">-0.2</button>
						<button class="btn btn-primary btn-lg btn-block mb-2" type="button"
							onclick="blueLvl1(10)">-10</button>
						<button class="btn btn-primary btn-lg btn-block mb-2" type="button"
							onclick="undoLvl1('blue')">Undo</button>
					</div>
				</div>

				<button class="btn btn-dark btn-lg btn-block" id="start-end-button" type="button"
					onclick="endLvl1()">End LVL 1</button>
			</div>
		</div>`;
        }
    }
}

function endLvl1() {
    const display = document.getElementById("display");

    display.innerHTML = `<div id="display" class="container">
			<h3 class="text-center text-white" id="status">LVL 2</h3>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-4 mb-2">
					<div class="btn-group-vertical">

						<button class="btn btn-danger btn-lg btn-block mt-3 mb-2" type="button"
							onclick="redLvl2(-0.5)">-0.5</button>
						<button class="btn btn-danger btn-lg btn-block mb-2" type="button"
							onclick="undoLvl2('red')">Undo</button>
					</div>
				</div>
				<div class="col-2 mb-2">
				<p id="red" class="text-center text-white fs-1 mt-3">x0</p>
				</div>
				<div class="col-4 mb-2">
					<div class="btn-group-vertical">

						<button class="btn btn-primary btn-lg btn-block mt-3 mb-2" type="button"
							onclick="blueLvl2(-0.5)">-0.5</button>
						<button class="btn btn-primary btn-lg btn-block mb-2" type="button"
							onclick="undoLvl2('blue')">Undo</button>
					</div>
				</div>

				<div class="col-2 mb-2">
				<p id="blue" class="text-center text-white fs-1 mt-3">x0</p>
				</div>
				<button class="btn btn-dark btn-lg btn-block" id="start-end-button" type="button"
					onclick="endLvl2()">End LVL 2</button>
			</div>
		</div>`;
}

function endLvl2() {
    const display = document.getElementById("display");

    display.innerHTML = `<div id="display" class="container">
			<h3 class="text-center text-white" id="status">LVL 3</h3>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-4 mb-2">
					<div class="btn-group-vertical">

						<button class="btn btn-danger btn-lg btn-block mt-3 mb-2" type="button"
							onclick="redLvl3(-0.5)">-0.5</button>
						<button class="btn btn-danger btn-lg btn-block mb-2" type="button"
							onclick="undoLvl3('red')">Undo</button>
					</div>
				</div>
				<div class="col-2 mb-2">
				<p id="red" class="text-center text-white fs-1 mt-3">x0</p>
				</div>
				<div class="col-4 mb-2">
					<div class="btn-group-vertical">

						<button class="btn btn-primary btn-lg btn-block mt-3 mb-2" type="button"
							onclick="blueLvl3(-0.5)">-0.5</button>
						<button class="btn btn-primary btn-lg btn-block mb-2" type="button"
							onclick="undoLvl3('blue')">Undo</button>
					</div>
				</div>
				<div class="col-2 mb-2">
				<p id="blue" class="text-center text-white fs-1 mt-3">x0</p>
				</div>
				<button class="btn btn-dark btn-lg btn-block" id="start-end-button" type="button"
					onclick="endMatch()">End LVL 3</button>
			</div>
		</div>`;
}

function endMatch() {
    const resultRed = document.getElementById("resultadoRed");
    const resultBlue = document.getElementById("resultadoBlue");
    const status = document.getElementById("status");
    const display = document.getElementById("display");

    resultRed.innerText = redTotal.toFixed(1);
    resultBlue.innerText = blueTotal.toFixed(1);
    status.innerText = "Match Ended";

    redTotal = 10;
    blueTotal = 10;
    blueCounterLvl1 = 0;
    redCounterLvl2 = 0;
    redCounterLvl1 = 0;
    blueCounterLvl2 = 0;
    redCounterLvl3 = 0;
    blueCounterLvl3 = 0;
    redUndoLvl2 = false;
    redUndoLvl3 = false;
    blueUndoLvl2 = false;
    blueUndoLvl3 = false;
	lastRedLvl1 = 0;
	lastBlueLvl1 = 0;
    fightStatus = "ended";

    display.innerHTML = `<div class="container text-center" id="display">
	<button class="btn btn-dark btn-lg btn-block mt-2 mb-2"
		id="start-end-button" type="button" onclick="startMatch(1)">Start Match</button>
		</div>`;
}
