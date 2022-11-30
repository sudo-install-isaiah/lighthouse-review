import { eqArrays } from "./eqArrays";
import { assertArraysEqual } from "./assertArraysEqual.js";

export function letterPositions(sentence) {
	const results = {};
	// iterate over sentence
	let index = 0;
	for (const letter of sentence) {
		// check for spaces
		if (letter) {
			// check for truthy value,
			// if exists, push char point into array
			// if not, create new array with index
			results[letter]
				? results[letter].push(sentence[index])
				: (results[letter] = [sentence[index]]);
		}
		index++;
	}
	return results;
}

assertArraysEqual(letterPositions("hello").e, [1]);
