const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🚗💨💨 Assertion Passed: ${actual} === ${expected}\n`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}\n`);
  }
};

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

//test code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true ); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 3]), true); // => should FAIL
assertEqual(eqArrays([], []), true); // => should PASS

//How to determine a perfect match
//check the length of the array
//check the indexes are the same