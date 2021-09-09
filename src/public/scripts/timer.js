window.onload = () => {
	m=0; s=0, mls=0; timeStarted = 0;
};

function write() {

	time = document.getElementById("time")
	let mt, st;
	mls++

	if(mls > 99) {s++; mls=0; }
	if(s > 59){ m++; s = 0; }

	mlst = ("0" + mls).slice(-2)
	st = ("0" + s).slice(-2)
	mt = ("0" + m ).slice(-2);

	time.innerHTML = `${mt}:${st}:${mlst}`;
}

function start() {
	write();
	timeStarted = setInterval(write,10);

}

function stop() {
	clearInterval(timeStarted);
}

function reset() {
	clearInterval(timeStarted);
	m=0; s= 0; mls=0;
}