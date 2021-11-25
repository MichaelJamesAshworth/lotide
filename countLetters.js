const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🚗💨💨 Assertion Passed: ${actual} === ${expected}\n`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}\n`);
  }
};

stringtoCount = "L H L"
//objR = {}
//item = 'L'
//Array[i] = item

const countLetters = function(stringtoCount,) {
  const objectResult = {};
  for (const item of stringtoCount) {
    if (!stringtoCount[item] === " ") { // we want NON-space characters
      if (objectResult[item] === undefined) { //if objectResult is missing the property then...
        objectResult[item] = 1; //L : 1
        } else {
          objectResult[item] += 1;
      }
    } 
  }
    return objectResult;
  }

//if character is not white{
  
//}

// count it


countLetters("LHL")
//loop though that string
//have an empty object variable
//logic of the loop needs populate the empty variable
//count the occurences of each letter in the string 
//  --add keys/value
//  --somehow tie to empty variable
//  --only add character if its a letter, not a space
//return the object variable
//

