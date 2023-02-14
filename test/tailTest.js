const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => { 
  it("should return [] when array has only one element", () => {
    assert.deepEqual(tail(["Yo Yo"]), [])
  });

  it("should return [] when array is empty", () => {
    assert.deepEqual(tail([]), [])
  });

  it("original array should keep the length. return 3 element when passed 3 elements", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    let newarray = tail(words);
    assert.deepEqual(words.length, 3)
  });
  it("ensure first element is 'Lighthouse'", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    let newarray = tail(words);
    assert.deepEqual(newarray[0], 'Lighthouse')
  });
});
