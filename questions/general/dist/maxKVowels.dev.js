"use strict";

var maxKVowels = function maxKVowels(s, k) {
  console.log(s);
  var map = new Map([['a', 1], ['i', 1], ['e', 1], ['o', 1], ['u', 1]]);
  var maxLetters = 0;
  var vCounter = 0;

  for (var i = 0; i < k; i++) {
    var currChar = s[i];

    if (map.has(currChar)) {
      map.set(currChar, map.get(currChar) + 1);
      vCounter++;
    }
  }

  maxLetters = vCounter;
  var end;
  var start = 0;

  for (end = k; end < s.length; end++) {
    if (map.has(s[start])) {
      vCounter--;
    }

    if (map.has(s[end])) {
      vCounter++;
    }

    maxLetters = Math.max(vCounter, maxLetters);
    start++;
  }

  return maxLetters;
}; // finding max vowels in a s


console.log(maxKVowels('leetcode', 3));