const hour = document.querySelector('#hr');
const minutes = document.querySelector('#min');
const seconds = document.querySelector('#sec');
setInterval(() => {
	const time = new Date();
	let hrs = time.getHours();
	let mints = time.getMinutes();
	let secs = time.getSeconds();
	let hrotation = 30 * hrs + mints / 2;
	let mrotation = 6 * mints;
	let srotation = 6 * secs;
	hour.style.transform = `rotate(${hrotation}deg)`
	minutes.style.transform = `rotate(${mrotation}deg)`
	seconds.style.transform = `rotate(${srotation}deg)`
}, 1000)