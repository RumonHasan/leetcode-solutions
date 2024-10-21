"use strict";

var firstIndex = function firstIndex(haystack, needle) {
  for (var i = 0; i < haystack.length; i++) {
    var currChar = haystack[i];

    if (currChar === needle[0]) {
      var startLen = i;
      var endLen = i + needle.length;
      var string = '';

      for (var j = startLen; j < endLen; j++) {
        string += haystack[j];
      }

      if (string === needle) {
        return startLen;
      }
    }
  }

  return -1;
};

console.log(firstIndex('mississippi', 'issip'));