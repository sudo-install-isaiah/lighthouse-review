import { assertEqual } from "./assertEqual.js";

export function countOnly(allItems, itemsToCount) {
	// define result object
	const result = {};
	// loop over allItems,
	allItems.forEach(item => {
		// then loop over itemsToCount,
		for (const key in itemsToCount) {
			// if truthy,
			if (item === key && itemsToCount[key]) {
				// if key doesnt exist, define with 1,
				// if exists, ++
				result[item] ? result[item]++ : (result[key] = 1);
			}
		}
	});
	// return result object
	return result;
}

const firstNames = [
	"Karl",
	"Salima",
	"Agouhanna",
	"Fang",
	"Kavith",
	"Jason",
	"Salima",
	"Fang",
	"Joe",
];

const result1 = countOnly(firstNames, {
	Jason: true,
	Karima: true,
	Fang: true,
	Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
