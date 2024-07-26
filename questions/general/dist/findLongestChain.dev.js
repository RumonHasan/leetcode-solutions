"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var findLongestChain = function findLongestChain(pairs) {
  // using dpCount to track the total count of larger pairs
  pairs.sort(function (a, b) {
    return a[1] - b[1];
  }); // sorting to fix the order

  var dpCount = new Array(pairs.length).fill(1);

  for (var i = 0; i < dpCount.length; i++) {
    var endPair = pairs[i];

    for (var j = 0; j < i; j++) {
      if (endPair[0] > currPair[1]) {
        // here just checking range and checking for longest icnreasing subsequence
        dpCount[i] = Math.max(dpCount[j] + 1, dpCount[i]); // updating the occurence in each individual places as a prefix sum
      }
    }
  }

  return Math.max.apply(Math, _toConsumableArray(dpCount));
}; // console.log(
//   findLongestChain([
//     [1, 2],
//     [7, 8],
//     [4, 5],
//   ])
// );


var rotateString = function rotateString(s, goal) {
  var array = s.split('');
  var pushCounter = 0;

  while (true) {
    if (pushCounter === array.length) break;
    var first = array.shift();
    array.push(first);
    pushCounter++;

    if (array.join('') === goal) {
      return true;
    }
  }

  return false;
};

console.log(rotateString('abcde', 'cdeab'));