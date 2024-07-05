"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var minCard = function minCard(cards) {
  var set = new Set(_toConsumableArray(cards));
  if (set.size === cards.length) return -1;
  var end = 0;
  var start = 0;
  var map = new Map();
  var minLen = Infinity;

  while (end < cards.length) {
    map.set(cards[end], (map.get(cards[end]) || 0) + 1);

    while (map.get(cards[end]) > 1) {
      minLen = Math.min(minLen, end - start + 1);
      map.set(cards[start], map.get(cards[start]) - 1);

      if (map.get(cards[start]) === 0) {
        map["delete"](cards[start]);
      }

      start++;
    }

    end++;
  }

  return minLen;
}; // to get the min array with matching values
// console.log(
//   minCard([
//     70, 37, 70, 41, 1, 62, 71, 49, 38, 50, 29, 76, 29, 41, 22, 66, 88, 18, 85,
//     53,
//   ])
// );


var maxScoreCard = function maxScoreCard(cardPoints, k) {
  var total = 0;
  var mainTotal = cardPoints.reduce(function (a, b) {
    return a + b;
  }, 0);
  var subRemovalSize = cardPoints.length - k;

  for (var i = 0; i < subRemovalSize; i++) {
    total += cardPoints[i];
  }

  var maxScore = mainTotal - total;

  for (var _i = subRemovalSize; _i < cardPoints.length; _i++) {
    total -= cardPoints[_i - subRemovalSize];
    total += cardPoints[_i];
    maxScore = Math.max(maxScore, mainTotal - total);
  }

  return maxScore;
};

console.log(maxScoreCard([1, 2, 3, 4, 5, 6, 1], 3));