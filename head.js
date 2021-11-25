const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🚗💨💨 Assertion Passed: ${actual} === ${expected}\n`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}\n`);
  }
};

const head = function(testArray) {
  return testArray[0];
};

assertEqual(head([5,6,7]), 5); //multiple elements that are numbers
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //multiple elements that are strings
assertEqual(head([3]), 3); // One element, consisting of a number
assertEqual(head(["one"]), "one"); //One element, consisting of a string
assertEqual(head([]),); // Empty array
