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

array = [1, 2, 3, 4];
let oddMiddleElement = Math.floor(array.length/2);
let evenMiddleElement = array.length / 2 - 1;
console.log(array[evenMiddleElement][]);
/*
 const middleElement = function(array) {
  let oddMiddleElement = Math.floor(array.length/2);
  let evenMiddleElement = ;
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 !== 0) {
    return array[middleElement];
  }
};
*/
//Test Code
// middle([1]) // => []
// middle([1, 2]) // => []