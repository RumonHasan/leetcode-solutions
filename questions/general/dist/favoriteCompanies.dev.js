"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var favoriteCompanies = function favoriteCompanies(_favoriteCompanies) {
  // checking for found subsets
  var indices = [];

  for (var i = 0; i < _favoriteCompanies.length; i++) {
    var subsetCheck = false;

    for (var j = 0; j < _favoriteCompanies.length; j++) {
      if (i !== j) {
        var _ret = function () {
          var subSet = new Set(_toConsumableArray(_favoriteCompanies[j]));

          var check = _favoriteCompanies[i].every(function (company) {
            return subSet.has(company);
          });

          if (check) {
            subsetCheck = check;
            return "break";
          }
        }();

        if (_ret === "break") break;
      }
    }

    if (!subsetCheck) {
      indices.push(i);
    }
  }

  return indices.sort(function (a, b) {
    return a - b;
  });
}; // console.log(
//   favoriteCompanies([
//     ['leetcode', 'google', 'facebook'],
//     ['google', 'microsoft'],
//     ['google', 'facebook'],
//     ['google'],
//     ['amazon'],
//   ])
// );


var countSubarrays = function countSubarrays(nums, k) {
  var max = Math.max.apply(Math, _toConsumableArray(nums)); // check for k times count subarrays

  var end = 0;
  var count = 0;
  var subCount = 0;
  var start = 0;

  while (end < nums.length) {
    if (nums[end] === max) {
      count++;
    }

    while (count === k) {
      if (nums[start] === max) {
        count--;
      }

      start++;
    }

    subCount += start > 0 ? start : 0;
    end++;
  } // main logic is once it hits the required k elements its the entire subarray that becomes a possible subarray so only have to reduce from the start to filter out


  return subCount;
}; //console.log(countSubarrays([1, 3, 2, 3, 3], 2));


var completeSubarray = function completeSubarray(nums) {
  var setSize = new Set(_toConsumableArray(nums)).size;
  var map = new Map();
  var end = 0;
  var start = 0;
  var size = 0;

  while (end < nums.length) {
    map.set(nums[end], (map.get(nums[end]) || 0) + 1);

    while (map.size === setSize) {
      // limits based on equality of size of set and map
      if (map.has(nums[start])) {
        map.set(nums[start], map.get(nums[start]) - 1);

        if (map.get(nums[start]) === 0) {
          map["delete"](nums[start]);
        }
      }

      console.log(map);
      start++;
    }

    size += start > 0 ? start : 0;
    end++;
  }

  return size;
}; //console.log(completeSubarray([1, 3, 1, 2, 2]));