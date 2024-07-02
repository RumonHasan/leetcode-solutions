"use strict";

var longestPalindromicSub = function longestPalindromicSub(s) {
  var result = '';

  for (var i = 0; i < s.length; i++) {
    var left = i - 1;
    var right = i + 1; // odd expansion

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      var currStr = s.slice(left, right + 1);
      result = result.length > currStr.length ? result : currStr;
      left--;
      right++;
    }

    localArray = [];
    left = i;
    right = i + 1;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      var _currStr = s.slice(left, right + 1);

      result = result.length > _currStr.length ? result : _currStr;
      left--;
      right++;
    }
  }

  return result;
};

console.log(longestPalindromicSub('babad'));