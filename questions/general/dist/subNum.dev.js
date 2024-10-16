"use strict";

var numAtMostK = function numAtMostK(s, k) {
  var zeroCount = 0;
  var oneCount = 0;
  var end = 0;
  var start = 0;
  var total = 0;

  while (end < s.length) {
    var currChar = s[end];

    if (currChar == '0') {
      zeroCount++;
    } else {
      oneCount++;
    } // both have to be not one at a time


    while (zeroCount > k && oneCount > k) {
      if (s[start] == '0') {
        zeroCount--;
      } else {
        oneCount--;
      }

      start++;
    }

    total += end - start + 1;
    end++;
  }

  return total;
};

console.log(numAtMostK('1010101', 2)); // counting large groups

var largeGroups = function largeGroups(s) {
  var result = [];
  var prev = s[0];
  var startIndex = 0;
  var counter = 1;

  for (var i = 1; i < s.length; i++) {
    var currChar = s[i];

    if (prev == currChar) {
      counter++;
    } else {
      if (counter >= 3) {
        result.push([startIndex, i - 1]);
      }

      startIndex = i;
      counter = 1;
      prev = s[i];
    }

    if (i === s.length - 1) {
      if (counter >= 3) {
        result.push([startIndex, i]);
      }
    }
  }

  return result;
};

console.log(largeGroups('aaaa'));