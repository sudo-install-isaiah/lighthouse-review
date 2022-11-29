const args = process.argv;
const arg = args.slice(2);

function pigLatin(array) {
	let result = array
		.map(x => {
			let arr = x.split("");
			let firstEle = arr.shift();
			arr.push(`${firstEle + "ay"}`);
			return arr.join("");
		})
		.join(" ");

	console.log(result);
}

pigLatin(arg);
