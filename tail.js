let emojiPass = String.fromCodePoint(0x1F603);
let emojiNotPass = String.fromCodePoint(0x1F621);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `${emojiPass} Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `${emojiNotPass} Assertion Failed: ${actual} !=== ${expected}`;
  }
};

const tail = function(array) {
  for (let i = 0; i <= array.length; i++) {
    return array.slice(1);
  }
};

const test1 = ["Yo Yo"];
console.log(tail(test1));

const test2 = [];
console.log(tail(test2));

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
console.log(assertEqual(words.length, 3)); // original array should still have 3 elements!

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result.length, 2)); // ensure we get back two elements
console.log(assertEqual(result[0], "Lighthouse")); // ensure first element is "Lighthouse"
console.log(assertEqual(result[1], "Labs")); // ensure second element is "Labs"