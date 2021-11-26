const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🚗💨💨 Assertion Passed: ${actual} === ${expected}\n`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}\n`);
  }
};

const findKey = function(objectToBeScanned, callback) {
  for (const key in objectToBeScanned) {
    if (callback(objectToBeScanned[key])) {
      return key;
    }
  }
};

//TEST CASE
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

const result2 = findKey({
  "uwu" : "huwuo",
  "owo" : "hewwo",
  "birb": "henlo"
}, x => x === "hewwo");

assertEqual(result1, "noma");
assertEqual(result2, "owo");

//for in to scan object
// -callback returns truthy value
// -if no key found, return undefined