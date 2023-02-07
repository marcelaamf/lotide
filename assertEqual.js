let emojiPass = String.fromCodePoint(0x1F603);
let emojiNotPass = String.fromCodePoint(0x1F621);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return emojiPass + "Assertion Passed: " + actual + " === " + expected;
  } else {
    return emojiNotPass + "Assertion Failed: " + actual + " !=== " + expected;
  }
};
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual(1, 3));
console.log(assertEqual("vai Flamengo", "vai Flamengo"));

