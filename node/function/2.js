function sayHello() {

	const data = new Date();
	const h = data.getHours();
	const m = data.getMinutes();
	const s = data.getSeconds();

	console.log("Time: " + h + ":" + m + ":" + s)

}

sayHello()

setInterval(sayHello, 1000);
