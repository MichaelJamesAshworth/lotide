const assertArraysEqual = require('../assertArraysEqual');
const getMidElement = require('../middle');

//TEST CODE
//LESS THAN 2
assertArraysEqual(getMidElement([1]), []); // => []
assertArraysEqual(getMidElement([1, 2]), []); // => []

//ODD
assertArraysEqual(getMidElement([1, 2, 3]), [2]);
assertArraysEqual(getMidElement([1, 2, 3, 4, 5]), [3]);
 
//EVEN
assertArraysEqual(getMidElement([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(getMidElement([1, 2, 3, 4, 5, 6]), [3, 4]);