const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  } for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  const result = eqArrays (arrayOne, arrayTwo);
  if (result) {
    console.log(`🚗💨💨 Assertion Passed: ${arrayOne} === ${arrayTwo}\n`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${arrayOne} !== ${arrayTwo}\n`);
  }
};

/*array = [1, 2, 3, 4];
let oddMiddleElement = Math.floor(array.length/2);
let evenMiddleElement = array.length / 2 - 1;
console.log(array[evenMiddleElement][]);
*/

 const getMidElement = function(array) {
  const middle = array.length / 2;
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 !== 0) {
    return [array[Math.floor(middle)]];
  } else {
    return [array[middle - 1], array[middle]]
  }
};

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