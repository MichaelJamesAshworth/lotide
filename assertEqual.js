// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🚗💨💨 Assertion Passed: ${actual} === ${expected}\n`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}\n`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1); // identical number
assertEqual(1, 11); // non identical number
assertEqual("michael", "michael"); // identical string
assertEqual("michael", "luke"); // non identical string