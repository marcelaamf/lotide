let emojiPass = String.fromCodePoint(0x1F603);
let emojiNotPass = String.fromCodePoint(0x1F621);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `${emojiPass} Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `${emojiNotPass} Assertion Failed: ${actual} !=== ${expected}`;
  }
};

const head = function(array) {
  for (let i = 0; i < array.length; i++) {
    return array[0];
  }
};

console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(head([8]), 5));
console.log(assertEqual(head([]), 5));

