const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🚗💨💨 Assertion Passed: ${actual} === ${expected}\n`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}\n`);
  }
};

const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements since we used slice!
//If we wanted to test the array that tail is outputting:
assertEqual(tail(words).length, 2);

const testTwo = ["yo yo"];
tail(testTwo);
assertEqual(testTwo.length, 1);
//If we wanted to test the array that tail is outputting:
assertEqual(tail(testTwo).length, 0);

const testThree = [];
tail(testThree);
assertEqual(testThree.length, 0);
//If we wanted to test the array that tail is outputting:
assertEqual(tail(testThree).length, 0);
