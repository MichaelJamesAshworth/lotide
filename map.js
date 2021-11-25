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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(arrToMap, callBack) {
  const results = [];
  for (let item of arrToMap) {
    results.push(callBack(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
const results3 = map(words, word => word.length * 2);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
assertArraysEqual(results3, [12, 14, 4, 10, 6]);