
let middleArray = [];
const middle = function(array) {
  if (array.length <= 2) {
    return middleArray;
  }

  let middleElement = Math.floor(array.length / 2);
  if (array.length % 2 !== 0) {
    middleArray = [array[middleElement]];
    return middleArray;
  } else {
    middleArray = [array[middleElement - 1], array[middleElement]];
    return middleArray;
  }
};

module.exports = middle;
