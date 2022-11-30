import { assertEqual } from "./assertEqual.js";

export function findKeyByValue(obj, value) {
	// loop through obj,
	for (const key in obj) {
		// looking for a value that matches value
		if (value === obj[key]) {
			// return that key
			return key;
		}
	}
	// or return undefined
	return undefined;
}

const bestTVShowsByGenre = {
	sci_fi: "The Expanse",
	comedy: "Brooklyn Nine-Nine",
	drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
