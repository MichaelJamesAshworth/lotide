const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrayOne, arrayTwo) {
  const result = eqArrays(arrayOne, arrayTwo);
  if (result) {
    console.log(`🚗💨💨 Assertion Passed: ${arrayOne} === ${arrayTwo}\n`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${arrayOne} !== ${arrayTwo}\n`);
  }
};

module.exports = assertArraysEqual;
