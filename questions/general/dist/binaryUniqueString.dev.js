"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var uniqueBinarySubstring = function uniqueBinarySubstring(nums) {
  var set = new Set(_toConsumableArray(nums));

  var dfs = function dfs(index, currString) {
    // checking if the index is nums.length or not
    if (index === nums.length) {
      // limiting the length
      if (!set.has(currString)) {
        return currString;
      }

      return null; // triggering a backtracking here if string is formed but its present in the set
    }

    var result = dfs(index + 1, currString + '0');

    if (result) {
      return result;
    }

    return dfs(index + 1, currString + '1');
  };

  return dfs(0, '');
}; // intuition: to form every possible substrings that is size of nums length and getting the first unique one
//console.log(uniqueBinarySubstring(['000', '011', '001']));


var maxLengthOfConcatSub = function maxLengthOfConcatSub(arr) {
  var isUnique = function isUnique(str) {
    return new Set(str).size === str.length;
  };

  var dfs = function dfs(index, currString) {
    // if it its the end of array then return the max length
    if (index === arr.length) {
      if (isUnique(currString)) {
        return currString.length;
      }

      return 0;
    }

    var dontTakeFirst = dfs(index + 1, currString);
    var take = 0;

    if (isUnique(currString + arr[index])) {
      // only take it if its unique
      take = dfs(index + 1, currString + arr[index]); // take the next element
    }

    return Math.max(dontTakeFirst, take);
  };

  return dfs(0, ''); // will return the largest value
}; // make sure to make the choice of either adding or not adding the every choice
//console.log(maxLengthOfConcatSub(['un', 'iq', 'ue']));