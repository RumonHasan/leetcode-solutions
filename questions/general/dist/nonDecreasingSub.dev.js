"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var nonDecreasingSub = function nonDecreasingSub(nums) {
  var result = [];

  var dfsSub = function dfsSub(index, sequence) {
    if (sequence.length >= 2) {
      result.push(_toConsumableArray(sequence));
    }

    var usedSet = new Set(); // set for stopping duplicates

    for (var i = index; i < nums.length; i++) {
      // avoid checking if the number is already present
      var currNum = nums[i];

      if (usedSet.has(nums[i])) {
        continue;
      } // add only if sequence is empty and there is no elements


      if (sequence.length === 0 || sequence[sequence.length - 1] <= currNum) {
        usedSet.add(currNum);
        sequence.push(currNum);
        dfsSub(i + 1, sequence);
        sequence.pop();
      }
    }

    return sequence;
  };

  dfsSub(0, []);
  return result;
}; // backtracking and dfs problems.. fundamental concept that arrays and objects are passed by values
//console.log(nonDecreasingSub([4, 6, 7, 7]));
// getting all the subsets


var subsets = function subsets(nums) {
  var result = [];

  var dfs = function dfs(index, subset) {
    if (subset.length >= 0) {
      result.push(_toConsumableArray(subset));
    }

    var set = new Set();

    for (var i = index; i < nums.length; i++) {
      var currNum = nums[i];

      if (set.has(currNum)) {
        continue;
      }

      subset.push(currNum);
      set.add(currNum);
      dfs(i + 1, subset);
      subset.pop();
    }

    return subset;
  };

  dfs(0, []);
  return result;
}; //console.log(subsets([1, 2, 3]));