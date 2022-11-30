import assertEqual from "./assertEqual.js";

export function eqArrays(arr1, arr2) {
	arr1.forEach((x, i) => {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	});
	return true;
}

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
