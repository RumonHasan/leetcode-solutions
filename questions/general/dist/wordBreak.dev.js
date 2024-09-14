"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var wordBreak = function wordBreak(s, wordDict) {
  var set = new Set(_toConsumableArray(wordDict));
  var memo = new Map();

  var dfs = function dfs(startIndex) {
    if (startIndex === s.length) {
      return true;
    } // if the starting path is true then it comes true or false


    if (memo.has(startIndex)) {
      return memo.get(startIndex);
    }

    for (var i = startIndex; i < s.length; i++) {
      var segment = s.slice(startIndex, i + 1);

      if (set.has(segment) && dfs(i + 1)) {
        memo.set(startIndex, true); // saving that found path // optional in this case since it will return true if its found

        return true;
      }
    } // adding if the path is not available


    memo.set(startIndex, false);
    return false;
  };

  return dfs(0);
}; // using dfs to check if the entire word is present or not and can be segmented


console.log(wordBreak('applepenapple', ['apple', 'pen']));