const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🚗💨💨 Assertion Passed: ${actual} === ${expected}\n`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}\n`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
   if (!Object.keys(object1).length === Object.keys(object2).length) {
     return false;
   } for (const key in object1) {
     if (!object1[key] === object2[key]) {
      return false;
     }
   }
   return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const abc = { a: "1", b: "2", c: "3" };
assertEqual(ab, ba);
assertEqual(eqObjects(ab, ba), true);
assertEqual(ab, abc);