import { eqArrays } from "./eqArrays.js";
import assertArrayEquals from "./assertArraysEqual.js";

export function without(arr1, arr2) {
	let result = [];
	// iterate over arr1
	arr1.forEach(x => {
		// double loop to check if each element same as arr2
		arr2.forEach(y => {
			// if not, push to result array
			if (x !== y) {
				result.push(x);
			}
		});
	});
	return result;
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArrayEquals(words, ["hello", "world", "lighthouse"]);
