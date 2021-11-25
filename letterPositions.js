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


const letterPositions = function(sentanceInput) {
  const objectResult = {};
  for (let i = 0; i < sentanceInput.length; i++) {
    let letterKey = sentanceInput[i];
    if (letterKey !== " ") { // we want NON-space characters
      if (objectResult[letterKey] === undefined) { //if objectResult is missing the property then...
        objectResult[letterKey] = [i];
      } else {
        objectResult[letterKey].push(i);
      }
    }
  }
  return objectResult;
};

console.log(letterPositions("Lighthouse in the house"));
assertArraysEqual(letterPositions("Lighthouse in the house").L, [0]);
//return key/value pair with an array of numbers as the property
// use a for loop since we're dealing with indices
// keep same conditionals to deal with whitespace/update key/value pair
//

