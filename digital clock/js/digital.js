const hours = document.querySelector('.hour');
const minute = document.querySelector('.min');
const second = document.querySelector('.sec');
let amPm = document.querySelector('.ampm');

function updateClock() {
	let h = new Date().getHours();
	let m = new Date().getMinutes();
	let s = new Date().getSeconds();
	let ampm = "AM"
	if(h == 0) {
		h = 12;
	}
	if(h > 12) {
		h -= 12;
		ampm = "PM"
	}
	hours.innerText = h < 10 ? "0" + h : h;
	minute.innerText = m < 10 ? "0" + m : m;
	second.innerText = s < 10 ? "0" + s : s;
	amPm.innerText = ampm;
}
setInterval(updateClock, 1000);