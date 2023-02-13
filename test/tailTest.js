const assertEqual = require('../assertEqual');
const tail = require('../tail');


const test1 = ["Yo Yo"];
console.log(tail(test1)); // return empty array

const test2 = [];
console.log(tail(test2)); // return empty array

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(words.length, 3); // original array should still have 3 elements!

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"