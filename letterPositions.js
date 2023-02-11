const assertArraysEqual = function(array1, array2) {
  let emojiPass = String.fromCodePoint(0x1F603);
  let emojiNotPass = String.fromCodePoint(0x1F621);
  if (array1.length !== array2.length) {
    return console.log(`${emojiNotPass} Assertion Failed: ${array1} !=== ${array2}`);
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return console.log(`${emojiNotPass} Assertion Failed: ${array1} !=== ${array2}`);
    }
  } return console.log(`${emojiPass} Assertion Passed: ${array1} === ${array2}`);
};

let emojiPass = String.fromCodePoint(0x1F603);
let emojiNotPass = String.fromCodePoint(0x1F621);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`${emojiPass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`${emojiNotPass} Assertion Failed: ${actual} !=== ${expected}`);
  }
};


const letterPositions = function(sentence){
  const result = {};
  let index = 0;
  for ( let i = 0; i < sentence.length; i++ ) {
    let character = sentence[i];
    if( character === " "){
    } else if ( result[character] === undefined ) {
    result[character] = [index];
    } else {
    result[character].push(index);
    } 
    index++;
  } 
  return result;
};

console.log(letterPositions("hello"));
console.log(letterPositions(""));
assertArraysEqual(letterPositions("hello").e, [1]);