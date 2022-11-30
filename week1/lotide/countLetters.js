import { assertEqual } from "./assertEqual.js";

export function countLetters(string) {
	// define result object
	const result = {};
	// remove spaces and convert case
	const str = string.split(" ").join("").toLowerCase();
	// loop string
	for (const letter of str) {
		// if letter in result exists, ++, else define
		result[letter] ? result[letter]++ : (result[letter] = 1);
	}
	// return result object
	return result;
}

// assertEqual(countLetters("lighthouse in the house"), {
// 	l: 1,
// 	i: 2,
// 	g: 1,
// 	h: 4,
// 	t: 2,
// 	o: 2,
// 	u: 2,
// 	s: 2,
// 	e: 3,
// 	n: 1,
// });

// console.log(countLetters("lighthouse in the house"));
