"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var maxArea = function maxArea(h, w, horizontalCuts, verticalCuts) {
  var hArray = [0].concat(_toConsumableArray(horizontalCuts), [h]).sort(function (a, b) {
    return a - b;
  });
  var vArray = [0].concat(_toConsumableArray(verticalCuts), [w]).sort(function (a, b) {
    return a - b;
  });
  var maxHgap = BigInt(0); // Convert to BigInt

  var maxWgap = BigInt(0); // Convert to BigInt

  var MOD = BigInt(1000000007); // Convert modulo to BigInt
  // get horizontal gap with adjustment for BigInt

  for (var i = 1; i < hArray.length; i++) {
    maxHgap = BigInt(Math.max(Number(maxHgap), hArray[i] - hArray[i - 1]));
  } // get vertical gap


  for (var j = 1; j < vArray.length; j++) {
    maxWgap = BigInt(Math.max(Number(maxWgap), vArray[j] - vArray[j - 1]));
  } // Convert result back to number using BigInt operations


  return Number(maxHgap * maxWgap % MOD);
}; // vertical is width horizontal is height


console.log(maxArea(5, 4, [1, 2, 4], [1, 3]));