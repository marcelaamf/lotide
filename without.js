const assertArraysEqual = function(array1, array2) {
  let emojiPass = String.fromCodePoint(0x1F603);
  let emojiNotPass = String.fromCodePoint(0x1F621);
  if (array1.length !== array2.length) {
    return console.log(`${emojiNotPass} Assertion Failed: ${array1} !=== ${array2}`);
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return console.log(`${emojiNotPass} Assertion Failed: ${array1} !=== ${array2}`);
    }
  } return console.log(`${emojiPass} Assertion Passed: ${array1} === ${array2}`);
};

let emojiPass = String.fromCodePoint(0x1F603);
let emojiNotPass = String.fromCodePoint(0x1F621);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`${emojiPass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`${emojiNotPass} Assertion Failed: ${actual} !=== ${expected}`);
  }
};
 
let without = function(source, itemsToRemove) {
  let itemsToKepp = source.filter(item => !itemsToRemove.includes(item));
  return itemsToKepp;
};

//TEST CASES
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);