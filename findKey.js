//ASSERT_EQUAL
let emojiPass = String.fromCodePoint(0x1F603);
let emojiNotPass = String.fromCodePoint(0x1F621);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`${emojiPass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`${emojiNotPass} Assertion Failed: ${actual} !=== ${expected}`);
  }
};

//FIND_KEY
const findKey = function(object, callback){
  for (let objectKey of Object.keys(object)) {
    if(callback(object[objectKey], object)) {
    return objectKey;
    }
  }
  return undefined;
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); 

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "Ora"); 

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3), "Akaleri"); 