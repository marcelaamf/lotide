const eqArrays = function(array1, array2) {
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

console.log(eqArrays([1, 2, 3], [1, 2, 3]));// => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

