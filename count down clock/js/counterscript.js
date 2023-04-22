const daycounter = document.querySelector("#day__count");
const hourscounter = document.querySelector("#hour__count");
const mincounter = document.querySelector("#min__count");
const seccounter = document.querySelector("#sec__count");

function newyearClock() {
	const currentYear = new Date().getFullYear();
	const newYear = new Date(`january 1 ${currentYear + 1} 00:00:00 `);
	const currentDate = new Date();
	const diff = newYear - currentDate;
	const day = Math.floor(diff / 1000 / 60 / 60 / 24);
	const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
	const min = Math.floor((diff / 1000 / 60) % 60);
	const sec = Math.floor((diff / 1000) % 60);
	daycounter.innerHTML = day < 10 ? "0" + day : day;
	hourscounter.innerHTML = hours < 10 ? "0" + hours : hours;
	mincounter.innerHTML = min < 10 ? "0" + min : min;
	seccounter.innerHTML = sec < 10 ? "0" + sec : sec;
}
setInterval(newyearClock, 1000);