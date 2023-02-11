let emojiPass = String.fromCodePoint(0x1F603);
let emojiNotPass = String.fromCodePoint(0x1F621);
//  EQ_ARRAYS
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
};


//EQ_OBJECTS
const eqObjects = function(obj1, obj2) {
  let obj1Key = Object.keys(obj1);
  let obj2Key = Object.keys(obj2);
//get the key from each object  
  if(obj1Key.length !== obj2Key.length) {
    return false;
  }

  for (let values of obj1Key) {
    if (Array.isArray(obj1) && Array.isArray(obj2)){
      if (!eqArrays(obj1Key, obj2Key)) {
      return false;
      } 
    } else if (obj1[values] !== obj2[values]) {
      return false;
      } 
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`${emojiPass} Assertion Passed: ${inspect(actual)} === ${inspect(expected)})`);
  } else {
    console.log(`${emojiNotPass} Assertion Failed: ${inspect(actual)} !=== ${inspect(expected)}`);
  }
};

assertObjectsEqual({a: 1, b: 3}, {b: 3, a: 2});
assertObjectsEqual({a: 1, b: 3}, {b: 3, a: 1});
assertObjectsEqual({A: 1,}, {C: 3, D: 4});