const args = process.argv;

function rollDice(num) {
	let string = "Rolled " + num + " dice: ";
	for (let i = 0; i < num; i++) {
		let roll = Math.ceil(Math.random() * 6);
		string += i === num - 1 ? roll : `${roll}, `;
	}
	console.log(string);
}

rollDice(args.slice(2));
