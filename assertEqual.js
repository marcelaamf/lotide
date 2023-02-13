
const assertEqual = function(actual, expected) {
  let emojiPass = String.fromCodePoint(0x1F603);
  let emojiNotPass = String.fromCodePoint(0x1F621);
  if (actual === expected) {
    console.log(`${emojiPass} Assertion Passed: ${actual} === ${expected}`);
  return;
  } else {
    console.log(`${emojiNotPass} Assertion Failed: ${actual} !=== ${expected}`);
  return;
  }
};

module.exports = assertEqual;
