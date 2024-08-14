"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var countNumberOfNiceSubarrays = function countNumberOfNiceSubarrays(nums, k) {
  // three pointer approach
  var end = 0;
  var left = 0;
  var middle = 0;
  var oddCount = 0;
  var totalSubCount = 0; // initial variables to control the pointer sections

  var oddCheck = function oddCheck(num) {
    return num % 2 === 1;
  };

  while (end < nums.length) {
    if (oddCheck(nums[end])) {
      oddCount++;
    } // when end number is odd and it exceeds odd check


    while (oddCount > k) {
      if (oddCheck(nums[left])) {
        oddCount--;
      }

      left++;
      middle = left; // keeping the middle updated to the left
    } // switch the middle point to the first one to get additional windows


    if (oddCount === k) {
      // middle tracks to the first one to count the additional subarrays basically
      while (middle < nums.length) {
        if (oddCheck(nums[middle])) {
          break;
        }

        middle++;
      }

      totalSubCount += middle - left + 1;
    }

    end++;
  }

  return totalSubCount;
}; //console.log(countNumberOfNiceSubarrays([1, 1, 2, 1, 1], 3));
// number of distinct subarrays equal to the whole arrays .. using three pointer approach


var countCompleteSubarrays = function countCompleteSubarrays(nums) {
  var map = new Map();
  var setSize = new Set(_toConsumableArray(nums)).length;
  var end = 0;
  var start = 0;
  var subCount = 0;
  console.log(setSize);

  while (end < nums.length) {
    map.set(nums[end], (map.get(nums[end]) || 0) + 1);

    while (_toConsumableArray(map.keys()).length === setSize) {
      console.log(map);
      subCount += nums.length - end;
      map.set(nums[start], map.get(nums[start]) - 1);

      if (map.get(nums[start]) === 0) {
        map["delete"](nums[start]);
      }

      start++;
    }

    end++;
  }

  return subCount;
};

console.log(countCompleteSubarrays([1, 3, 1, 2, 2]));