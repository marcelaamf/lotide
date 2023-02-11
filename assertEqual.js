let emojiPass = String.fromCodePoint(0x1F603);
let emojiNotPass = String.fromCodePoint(0x1F621);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${emojiPass} Assertion Passed: ${actual} === ${expected}`);
  return;
  } else {
    console.log(`${emojiNotPass} Assertion Failed: ${actual} !=== ${expected}`);
  return;
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 3);
assertEqual("vai Flamengo", "vai Flamengo");

