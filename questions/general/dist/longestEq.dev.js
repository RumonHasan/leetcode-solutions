"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var longestEq = function longestEq(nums, k) {
  var map = new Map();
  var index = 0;
  var start = 0;
  var maxLength = 0;
  var maxFreq = 0;

  while (index < nums.length) {
    map.set(nums[index], (map.get(nums[index]) || 0) + 1);
    maxFreq = Math.max(maxFreq, map.get(nums[index])); // always keeps the latest max freq up to date

    while (index - start + 1 - Math.max.apply(Math, _toConsumableArray(map.values())) > k) {
      // reducing the start occurence from the back
      if (map.has(nums[start])) {
        map.set(nums[start], map.get(nums[start]) - 1);

        if (map.get(nums[start]) === 0) {
          map["delete"](nums[start]);
        }
      }

      start++;
    }

    maxLength = Math.max(maxFreq, maxLength);
    index++;
  }

  return maxLength;
}; // finding the longest equal subarray after deleting at most k numbers from the entire array
//console.log(longestEq([1, 3, 2, 3, 1, 3], 3));