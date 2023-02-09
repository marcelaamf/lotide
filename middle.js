// TEST/ASSERTION FUNCTIONS
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

const assertArraysEqual = function(array1, array2) {
  let emojiPass = String.fromCodePoint(0x1F603);
  let emojiNotPass = String.fromCodePoint(0x1F621);
  if (array1.length !== array2.length) {
    return `${emojiNotPass} Assertion Failed: ${array1} !=== ${array2}`;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return `${emojiNotPass} Assertion Failed: ${array1} !=== ${array2}`;
    }
  } return `${emojiPass} Assertion Passed: ${array1} === ${array2}`;
};


// ACTUAL FUNCTION
let middleArray = [];
const middle = function(array) {
  if (array.length <= 2) {
    return middleArray;
  }

  let middleElement = Math.floor(array.length / 2);
  if (array.length % 2 !== 0) {
    middleArray = [array[middleElement]];
    return middleArray;
  } else {
    middleArray = [array[middleElement - 1], array[middleElement]];
    return middleArray;
  }
};

// empty, 1 or 2 elements
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
// array w/ odd elements
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
// array w/ even elements
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([3, 1, 1, 2]), [1, 1]));
