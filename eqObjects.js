//ASSERT_EQUAL
let emojiPass = String.fromCodePoint(0x1F603);
let emojiNotPass = String.fromCodePoint(0x1F621);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${emojiPass} Assertion Passed: ${actual} === ${expected}`);
  
  } else {
    console.log(`${emojiNotPass} Assertion Failed: ${actual} !=== ${expected}`);
  
  }
};
//EQ_ARRAYS 
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
};
//EQ_OBJECTS
const eqObjects = function(obj1, obj2) {
  let obj1Key = Object.keys(obj1);
  let obj2Key = Object.keys(obj2);
//get the key from each object  
  if(obj1Key.length !== obj2Key.length) {
    return false;
  }

  for (let values of obj1Key) {
    if (Array.isArray(obj1) && Array.isArray(obj2)){
      if (!eqArrays(obj1Key, obj2Key)) {
      return false;
      } 
    } else if (obj1[values] !== obj2[values]) {
      return false;
      } 
  }
  return true;
};
console.log("eq objects is: " + eqObjects({A: 1,}, {C: 3, D: 4}));
console.log("eq object is: " + eqObjects({a: 1, b: 3}, {b: 3, a: 1}));
console.log("eq object is: " + eqObjects({a: 1, b: 3}, {b: 3, a: 2}));

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };

console.log("test eqObj: " + eqObjects(shirtObject , anotherShirtObject)); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), true);
