"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var countSubarrays = function countSubarrays(nums, k) {
  //console.log(nums);
  var max = Math.max.apply(Math, _toConsumableArray(nums));
  var maxCounter = 0;
  var end = 0;
  var start = 0;
  var subCount = 0;

  while (end < nums.length) {
    var currNum = nums[end];

    if (currNum === max) {
      maxCounter++;
    }

    while (maxCounter >= k) {
      if (nums[start] === max) {
        maxCounter--;
      }

      start++;
    }

    var initialStart = start - 1;

    if (initialStart >= 0) {
      subCount += initialStart + 1;
    }

    end++;
  }

  return subCount;
}; //console.log(countSubarrays([1, 3, 2, 3, 3], 2));