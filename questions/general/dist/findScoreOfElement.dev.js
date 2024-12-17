"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var findScore = function findScore(nums) {
  var array = nums.map(function (num, index) {
    return [num, index];
  }); // sorting based on value then index

  var sorted = array.sort(function (a, b) {
    return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
  }); // now checking per element

  var total = 0;
  var boolArray = new Array(nums.length).fill(false);

  for (var i = 0; i < sorted.length; i++) {
    var _sorted$i = _slicedToArray(sorted[i], 2),
        num = _sorted$i[0],
        index = _sorted$i[1];

    var nextIndex = index + 1;
    var prevIndex = index - 1; // check for bool state form indexing array

    if (!boolArray[index]) {
      total += num;
      boolArray[index] = true;
      boolArray[nextIndex] = true;
      boolArray[prevIndex] = true;
    }
  }

  return total;
};
/*) [1, 2, 2, 3, 3, 5]*/
//console.log(findScore([2, 1, 3, 4, 5, 2]));


var meanTrimMean = function meanTrimMean(arr) {
  var sorted = arr.sort(function (a, b) {
    return a - b;
  }); // remove top and small 5 % of the elements

  var avgCalc = function avgCalc(array) {
    return array.reduce(function (acc, curr) {
      return acc + curr;
    }, 0) / array.length;
  };

  var fivePercent = Math.floor(5 / 100 * arr.length);
  var newArray = [];

  for (var i = fivePercent; i < sorted.length - fivePercent; i++) {
    newArray.push(sorted[i]);
  }

  return avgCalc(newArray);
};

console.log(meanTrimMean([6, 2, 7, 5, 1, 2, 0, 3, 10, 2, 5, 0, 5, 5, 0, 8, 7, 6, 8, 0]));
var array = [1, 2, 3, 4, 4];