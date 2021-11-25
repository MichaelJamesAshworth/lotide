const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🚗💨💨 Assertion Passed: ${actual} === ${expected}\n`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}\n`);
  }
};

//LHL
//item ==='L'
//objectResult[item] === objectResult["L"] === objectResult.L

const countLetters = function(stringtoCount,) {
  const objectResult = {};
  for (const item of stringtoCount) {
    if (item !== " ") { // we want NON-space characters
      if (objectResult[item] === undefined) { //if objectResult is missing the property then...
        objectResult[item] = 1; //L : 1
      } else {
        objectResult[item] += 1;
      }
    }
  } return objectResult;
};
assertEqual(countLetters('LHL'), {});
const arg = process.argv[2];
console.log(countLetters(arg));
