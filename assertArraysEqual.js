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
  const result = eqArrays(arrayOne, arrayTwo);
  if (result) {
    console.log(`🚗💨💨 Assertion Passed: ${arrayOne} === ${arrayTwo}\n`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${arrayOne} !== ${arrayTwo}\n`);
  }
};

assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]);
assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 6]);
assertArraysEqual([1, 2, 3, 4], [1, 2, 3,]);

