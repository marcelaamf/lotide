let emojiPass = String.fromCodePoint(0x1F603);
let emojiNotPass = String.fromCodePoint(0x1F621);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `${emojiPass} Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `${emojiNotPass} Assertion Failed: ${actual} !=== ${expected}`;
  }
};

//take in a sentence (as a string) and then return a count of each of the letters in that sentence
const countLetters = function(sentence) {
  let result = {};
  for (let x = 0; x < sentence.length; x++) {
    let letter = sentence[x];
    result[letter] = (isNaN(result[letter])  ? 1 : result[letter] + 1);
    delete result[' '];
  }
  return result;
};

console.log(countLetters("Hello, Marcela 232"));

