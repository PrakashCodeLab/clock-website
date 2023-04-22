const hour = document.querySelector('#hour');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');
const day = document.querySelector('.Day')
const month = document.querySelector('.month')
const year = document.querySelector('.year')
const date = document.querySelector('.Date')
const currentTime = document.querySelector('.CurrentTime');
const todayDate = new Date();
const getMonth = todayDate.getMonth()
const currentDate = todayDate.getDate();
const currentYear = todayDate.getFullYear()
const days = ['Sunday ,', 'Monday ,', 'Tuesday ,', 'Wednesday ,', 'Thursday ,', 'Friday ,', 'Saturday ,'];
day.innerText = days[todayDate.getDay()];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
month.innerText = months[getMonth];
date.innerText = currentDate;
year.innerText = currentYear;
setInterval(() => {
	const newDates = new Date();
	let h = newDates.getHours();
	let m = newDates.getMinutes();
	let s = newDates.getSeconds();
	const hours = h * 30 + m / 2
	const minutes = m * 6
	const seconds = s * 6
	hour.style.transform = `rotate(${hours}deg)`;
	min.style.transform = `rotate(${minutes}deg)`;
	sec.style.transform = `rotate(${seconds}deg)`;
}, 1000)

function updateClock() {
	const date = new Date();
	let hours = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();
	let session = "Am";
	if(hours > 12) {
		hours = hours - 12
		session = "pm"
	}
	hours = (hours % 12 || 12).toString().padStart(2, '0');
	min = min.toString().padStart(2, '0');
	sec = sec.toString().padStart(2, '0');
	currentTime.innerText = `${hours} : ${min} : ${sec} ${session} `;
}
setInterval(updateClock, 1000);
const Hamburger = document.querySelector(".navbar__hamburger");
const navbar = document.querySelector(".navbar__list__section");
const body = document.querySelector(".body")
Hamburger.addEventListener('click', () => {
		navbar.classList.toggle('is-active');
		body.classList.toggle('body-overflow');
		Hamburger.classList.toggle('bar__change');
	})
	//toggle bar icon 
const toggleBar = document.querySelector(".toggle__section")
const toggleball = document.querySelector(".toggle__ball")
toggleBar.addEventListener('click', () => {
	toggleball.classList.toggle('ball__switch');
	body.classList.toggle('body-dark')
})