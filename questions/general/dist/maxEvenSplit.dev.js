"use strict";

var maxEvenSplit = function maxEvenSplit(finalSum) {
  var stack = [];
  var sum = 0;
  var index = 2;
  if (finalSum % 2 !== 0) return [];

  while (sum <= finalSum) {
    stack.push(index);
    sum += index;
    index += 2;

    if (sum === finalSum) {
      return stack;
    }
  }

  var poppedVal = stack.pop();
  var lastSum = sum - poppedVal;
  sum -= poppedVal;
  var neededSum = finalSum - lastSum; // if it includes the last sum then pop again and recalculate

  if (stack.includes(neededSum)) {
    sum -= stack.pop();
    var newNeededSum = finalSum - sum;
    stack.push(newNeededSum);
  } else {
    // just push the original needed sum if its not included in the stack already
    stack.push(neededSum);
  }

  return stack;
};

console.log(maxEvenSplit(12));