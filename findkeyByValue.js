let emojiPass = String.fromCodePoint(0x1F603);
let emojiNotPass = String.fromCodePoint(0x1F621);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`${emojiPass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`${emojiNotPass} Assertion Failed: ${actual} !=== ${expected}`);
  }
};


const findKeyByValue = function(obj, value) {
  // scan object
  for (const key of Object.keys(obj)) {
    // search value inside keys
    if (obj[key] === value) {
    // return first Key with value
      return key;
    }
  } return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


