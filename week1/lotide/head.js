// const assertEqual = require("./assertEqual");
import assertEqual from "./assertEqual.js";

const head = function (array) {
	return array.shift();
};

// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

export default head;
