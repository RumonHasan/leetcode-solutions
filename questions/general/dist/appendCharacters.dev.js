"use strict";

var appendCharacters = function appendCharacters(s, t) {
  var sIndex = 0;
  var tIndex = 0;

  while (sIndex < s.length) {
    var sChar = s[sIndex];
    var tChar = t[tIndex];

    if (sChar == tChar) {
      tIndex++;
    }

    sIndex++;
  }

  var remainingTSlice = t.slice(tIndex, t.length);
  return remainingTSlice.length;
};

console.log(appendCharacters('coaching', 'coding'));

var isSubsequence = function isSubsequence(s, t) {
  var index = 0;

  for (var i = 0; i < t.length; i++) {
    var tChar = t[i];
    var sChar = s[index];

    if (sChar == tChar) {
      index++;
    }
  }

  return index === s.length ? true : false;
};

console.log(isSubsequence('abc', 'ahbgdc'));