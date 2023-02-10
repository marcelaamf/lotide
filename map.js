
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

// assertArraysequal Test
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

console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]));

