const raisinAlarm = function (cookie) {
	let result = "All Good!";
	// loop through the array
	cookie.forEach(x => {
		if (x === "🍇") {
			// if theres grapes, console.log raisin alert!
			result = "Raisin alert!";
		}
	});
	console.log(result);
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
