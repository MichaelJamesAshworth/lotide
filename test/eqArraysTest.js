const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
//test code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 3]), true); // => should FAIL
assertEqual(eqArrays([], []), true); // => should PASS

//How to determine a perfect match
//check the length of the array
//check the indexes are the same