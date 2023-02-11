const assertEqual = function(actual, expected) {
  let emojiPass = String.fromCodePoint(0x1F603);
  let emojiNotPass = String.fromCodePoint(0x1F621);
  if (actual === expected) {
    return `${emojiPass} Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `${emojiNotPass} Assertion Failed: ${actual} !=== ${expected}`;
  }
};
// It's okay for eqArrays to not return true for nested arrays or arrays of objects that are identical.
//takes two arrays and compare perfect match. returns boolean


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


console.log(eqArrays([1, 2, 3], [1, 2, 3]));// => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
