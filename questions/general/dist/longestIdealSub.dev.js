"use strict";

var longestIdealSub = function longestIdealSub(s, k) {
  console.log(s);
  var dp = new Array(s.length).fill(0);

  for (var i = 0; i < s.length; i++) {
    var currChar = s[i];
    var currCharCode = currChar.charCodeAt(0);

    for (var j = 0; j < i; j++) {
      var checkChar = s[j];
      var checkCharCode = checkChar.charCodeAt(0);

      if (Math.abs(currCharCode - checkCharCode) <= k) {}
    }
  }
};

console.log(longestIdealSub('acfgbd', 2));