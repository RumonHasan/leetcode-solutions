"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var minMaxKRemoval = function minMaxKRemoval(n, arr, k) {
  if (arr.length <= k || !arr) {
    // removals have to be within the limit
    return [0, 0];
  }

  var total = arr.reduce(function (acc, curr) {
    return acc + curr;
  }, 0); // uses no sorting function in order to get the min and max value

  var getMaxRemoval = function getMaxRemoval() {
    var tempArr = _toConsumableArray(arr);

    var sumMax = 0;

    for (var i = 0; i < k; i++) {
      var maxIndex = 0;

      for (var j = 0; j < tempArr.length; j++) {
        if (tempArr[j] > tempArr[maxIndex]) {
          maxIndex = j; // keep changing till it finds max
        }
      }

      sumMax += tempArr[maxIndex];
      tempArr[maxIndex] = -Infinity; // optional here array can be spliced instead of switched values
    }

    return sumMax;
  };

  var getMinRemoval = function getMinRemoval() {
    var tempArr = _toConsumableArray(arr);

    var sumMin = 0;

    for (var i = 0; i < k; i++) {
      var minIndex = 0;

      for (var j = 0; j < tempArr.length; j++) {
        if (tempArr[j] < tempArr[minIndex]) {
          minIndex = j; // keep changing till it finds max
        }
      }

      sumMin += tempArr[minIndex];
      tempArr[minIndex] = Infinity;
    }

    return sumMin;
  };

  var getMax = getMaxRemoval();
  var getMin = getMinRemoval();
  return [total - getMax, total - getMin];
};

console.log(minMaxKRemoval(5, [1, 2, 3, 4, 5], 2)); // max removal sum => 6
// min removal sum => 12