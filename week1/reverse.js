const args = process.argv;
const arg = args.slice(2);

function reverse(array) {
	array.forEach(x => {
		let str = "";
		for (let i = x.length - 1; i >= 0; i--) {
			str += x[i];
		}
		console.log(str);
	});
}

reverse(arg);
