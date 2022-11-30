import { eqArrays } from "./eqArrays.js";

export function assertArraysEqual(x, b) {
	console.log(
		eqArrays(x, b) ? "Arrays are the same" : "Arrays are not the same"
	);
}

// assertArraysEqual([1, 2, 3], [1, 2, 3]);
