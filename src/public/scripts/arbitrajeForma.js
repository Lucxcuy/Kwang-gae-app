let redTotal = 10;
let blueTotal = 10;
let redCounterLvl1 = 0;
let blueCounterLvl1 = 0;
let redCounterLvl2 = 0;
let blueCounterLvl2 = 0;
let redCounterLvl3 = 0;
let blueCounterLvl3 = 0;
let fightStatus = "ended";

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
        redTotal = 10;
        blueTotal = 10;

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
					</div>
				</div>
				<div class="col-6 mb-2">
					<div class="btn-group-vertical">

						<button class="btn btn-primary btn-lg btn-block mt-3 mb-2" type="button"
							onclick="blueLvl1(0.2)">-0.2</button>
						<button class="btn btn-primary btn-lg btn-block mb-2" type="button"
							onclick="blueLvl1(10)">-10</button>
					</div>
				</div>
				<button class="btn btn-dark btn-lg btn-block" id="start-end-button" type="button"
					onclick="endLvl1()">End LVL 1</button>
			</div>
		</div>`;
        }
    }
}

function redLvl1(points) {
    redCounterLvl1 += 1;
    if (fightStatus == "running" && redCounterLvl1 <= 30) {
        redTotal -= points;
        if (redTotal <= 0) {
            redTotal = 0;
        }
        console.log(redTotal);
        console.log(redCounterLvl1);
    }
}

function redLvl2(points) {
    redCounterLvl2 += 1;
    if (fightStatus == "running" && redCounterLvl2 <= 4) {
        redTotal += points;
        if (redTotal <= 0) {
            redTotal = 0;
        } else if(redTotal >= 10) {
			redTotal = 10;
		}
        console.log(redTotal);
    }
}

function redLvl3(points) {
    redCounterLvl3 += 1;
    if (fightStatus == "running" && redCounterLvl3 <= 4) {
        redTotal += points;
        if (redTotal <= 0) {
            redTotal = 0;
        } else if(redTotal >= 10) {
			redTotal = 10;
		}
        console.log(redTotal);
    }
}

function blueLvl1(points) {
    blueCounterLvl1 += 1;
    if (fightStatus == "running" && blueCounterLvl1 <= 30) {
        blueTotal -= points;
        if (blueTotal <= 0) {
            blueTotal = 0;
        } 

        console.log(blueTotal);
    }
}

function blueLvl2(points) {
    blueCounterLvl2 += 1;
    if (fightStatus == "running" && blueCounterLvl2 <= 4) {
        blueTotal += points;
        if (blueTotal <= 0) {
            blueTotal = 0;
        } else if(blueTotal >= 10) {
			blueTotal = 10;
		}

        console.log(blueTotal);
    }
}

function blueLvl3(points) {
    blueCounterLvl3 += 1;
    if (fightStatus == "running" && blueCounterLvl3 <= 4) {
        blueTotal += points;
        if (blueTotal <= 0) {
            blueTotal = 0;
        } else if(blueTotal >= 10) {
			blueTotal = 10;
		}

        console.log(blueTotal);
    }
}

function endLvl1() {
    const display = document.getElementById("display");

    display.innerHTML = `<div id="display" class="container">
			<h3 class="text-center text-white" id="status">LVL 2</h3>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-6 mb-2">
					<div class="btn-group-vertical">

						<button class="btn btn-danger btn-lg btn-block mt-3 mb-2" type="button"
							onclick="redLvl2(-0.5)">-0.5</button>
						<button class="btn btn-danger btn-lg btn-block mb-2" type="button"
							onclick="redLvl2(0.5)">+0.5</button>
					</div>
				</div>
				<div class="col-6 mb-2">
					<div class="btn-group-vertical">

						<button class="btn btn-primary btn-lg btn-block mt-3 mb-2" type="button"
							onclick="blueLvl2(-0.5)">-0.5</button>
						<button class="btn btn-primary btn-lg btn-block mb-2" type="button"
							onclick="blueLvl2(0.5)">+0.5</button>
					</div>
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
				<div class="col-6 mb-2">
					<div class="btn-group-vertical">

						<button class="btn btn-danger btn-lg btn-block mt-3 mb-2" type="button"
							onclick="redLvl3(-0.5)">-0.5</button>
						<button class="btn btn-danger btn-lg btn-block mb-2" type="button"
							onclick="redLvl3(0.5)">+0.5</button>
					</div>
				</div>
				<div class="col-6 mb-2">
					<div class="btn-group-vertical">

						<button class="btn btn-primary btn-lg btn-block mt-3 mb-2" type="button"
							onclick="blueLvl3(-0.5)">-0.5</button>
						<button class="btn btn-primary btn-lg btn-block mb-2" type="button"
							onclick="blueLvl3(0.5)">+0.5</button>
					</div>
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

    fightStatus = "ended";

	display.innerHTML = `<div class="container text-center" id="display">
	<button class="btn btn-dark btn-lg btn-block mt-2 mb-2"
		id="start-end-button" type="button" onclick="startMatch(1)">Start Match</button>
		</div>`
}