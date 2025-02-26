"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var minOpPeriodicChunks = function minOpPeriodicChunks(word, k) {
  var map = new Map();
  var string = '';
  var maxFreq = 0;

  for (var i = 0; i < word.length; i++) {
    var currChar = word[i];
    string += currChar;

    if (string.length === k) {
      map.set(string, (map.get(string) || 0) + 1);

      if (string.length) {
        maxFreq = Math.max(maxFreq, map.get(string));
      }

      string = '';
    }
  }

  var mapVals = _toConsumableArray(map.values());

  var totalChunks = mapVals.reduce(function (a, b) {
    return a + b;
  }, 0);
  return totalChunks - maxFreq;
}; // have to form k periodic partitions then calculate the total frequency then subtracted with the chunks to find the number of operations needed


console.log(minOpPeriodicChunks('leetcodeleet', 4));