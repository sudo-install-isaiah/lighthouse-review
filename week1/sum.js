const args = process.argv;
const x = args[2];
const y = args[3];

function sum(first, second) {
	return Number(first) + Number(second);
}

console.log(sum(x, y));
