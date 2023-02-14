const eqArrays = require('./eqArrays');
//ASSERT_EQUAL_ARRAYS
let emojiPass = String.fromCodePoint(0x1F603);
let emojiNotPass = String.fromCodePoint(0x1F621);
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`${emojiPass} Assertion Passed: ${actual} === ${expected}`);
    return;
  } else {
    console.log(`${emojiNotPass} Assertion Failed: ${actual} !=== ${expected}`);
    return;
  }
};

module.exports = assertArraysEqual;