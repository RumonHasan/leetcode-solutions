"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var countSubstrings = function countSubstrings(s) {
  var count = s.length;

  var checkPal = function checkPal(left, right) {
    var count = 0;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }

    return count;
  };

  for (var i = 0; i < s.length; i++) {
    var left = i - 1;
    var right = i + 1;
    var oddCount = checkPal(left, right);
    left = i;
    right = i + 1;
    var evenCount = checkPal(left, right);
    count += (_readOnlyError("count"), oddCount + evenCount);
  }

  return count;
};

console.log(countSubstrings('abc'));