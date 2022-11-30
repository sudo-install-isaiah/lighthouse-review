import { assertArraysEqual } from "./assertArraysEqual.js";
import { eqArrays } from "./eqArrays.js";

export function middle(array) {
	if (array.length <= 2) {
		return [];
	}

	let middle = Math.ceil(array.length / 2);

	return array.splice(
		middle - 1,
		array.length % 2 === 0 ? middle + 1 : middle - 1
	);
}

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
