import { assertEqual } from "./assertEqual.js";
import { eqArrays } from "./eqArrays.js";

export function eqObjects(obj1, obj2) {
	// check for same number of keys
	if (Object.keys(obj1).length !== Object.keys(obj2).length) {
		return false;
	}
	// loop first obj and run a check against obj2
	for (const key in obj1) {
		// if array, use eqArrays
		if (Array.isArray(obj1[key])) {
			if (eqArrays(obj1[key], obj2[key]) === false) {
				return false;
			}
		} else if (obj1[key] !== obj2[key]) {
			return false;
		}
		return true;
	}
}
// TESTS
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject); // => true
//We need to use that return value in combination with assertEqual to test if the function is working correctly.
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = {
	size: "medium",
	color: "red",
	sleeveLength: "long",
};
eqObjects(shirtObject, longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
