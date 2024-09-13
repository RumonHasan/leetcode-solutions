"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var extraChars = function extraChars(s, dictionary) {
  var set = new Set(_toConsumableArray(dictionary));
  var cacheDp = new Map();

  var searchDfs = function searchDfs(index) {
    if (index === s.length) return 0; // base edge case
    // adding caches for similar paths

    if (cacheDp.has(index)) {
      return cacheDp.get(index);
    } // skipping character


    var skipOne = 1 + searchDfs(index + 1); // will have a value if there is a found result in the loop
    // checking for substring presence

    for (var j = index; j < s.length; j++) {
      var substring = s.slice(index, j + 1); // check if substring is present in the set or not

      if (set.has(substring)) {
        // skip to the next call while calculating the minimum
        skipOne = Math.min(skipOne, searchDfs(j + 1));
      }
    }

    cacheDp.set(index, skipOne); // adding the index and minimum skipped letters to map set;

    return skipOne;
  };

  return searchDfs(0);
}; // using dfs to calculate the result for with a skipped character and from teh starting charactaer itself...


console.log(extraChars('leetscode', ['leet', 'code', 'leetcode']));