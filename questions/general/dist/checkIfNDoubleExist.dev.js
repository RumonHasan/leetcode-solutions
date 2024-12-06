"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var checkIfNDoubleExist = function checkIfNDoubleExist(arr) {
  var set = new Set();

  for (var i = 0; i < arr.length; i++) {
    var currNum = arr[i];

    if (set.has(currNum / 2) || set.has(currNum * 2)) {
      console.log(arr);
      return true;
    }

    set.add(currNum);
  }

  return false;
};

console.log(checkIfNDoubleExist([10, 2, 5, 3]));

var longestCharacterReplacement = function longestCharacterReplacement(s, k) {
  console.log(s);
  var map = new Map();
  var start = 0;
  var end = 0;
  var maxLen = 0;

  while (end < s.length) {
    map.set(s[end], (map.get(s[end]) || 0) + 1);

    while (end - start + 1 - Math.max.apply(Math, _toConsumableArray(map.values())) > k) {
      // checking with the current window
      if (map.has(s[start])) {
        map.set(s[start], map.get(s[start]) - 1);

        if (map.get(s[start]) === 0) {
          map["delete"](s[start]);
        }
      }

      start++;
    }

    maxLen = Math.max(end - start + 1, maxLen);
    end++;
  }

  return maxLen;
};

console.log(longestCharacterReplacement('ABAB', 2));