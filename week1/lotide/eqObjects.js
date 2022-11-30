import { assertEqual } from "./assertEqual.js";
import { eqArrays } from "./eqArrays.js";

export function eqObjects(obj1, obj2) {
	// check for same number of keys
	if (Object.keys(obj1).length === Object.keys(obj2).length) {
		// loop first obj and run a check against obj2
		for (const key in obj1) {
			// compare both key value pairs and store into result
			let result = Array.isArray(obj1[key])
				? eqArrays(obj1[key], obj2[key])
				: obj1[key] === obj2[key];
			if (!result) return false;
		}
		//if reaches the end of the loop, return true
		return true;
	}
	return false;
}
// TESTS
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
// eqObjects(shirtObject, anotherShirtObject); // => true
//We need to use that return value in combination with assertEqual to test if the function is working correctly.
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = {
	size: "medium",
	color: "red",
	sleeveLength: "long",
};
// eqObjects(shirtObject, longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
