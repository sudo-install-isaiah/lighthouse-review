import { eqArrays } from "./eqArrays.js";

export default function assertArrayEquals(x, b) {
	console.log(
		eqArrays(x, b) ? "Arrays are the same" : "Arrays are not the same"
	);
}

assertArrayEquals([1, 2, 3], [1, 2, 3]);
