"use strict";

var minSwaps = function minSwaps(s) {
  var extraClose = 0;
  var max = 0;

  for (var i = 0; i < s.length; i++) {
    var currBracket = s[i];

    if (currBracket == ']') {
      extraClose++;
    } else {
      extraClose -= 1;
    }

    max = Math.max(max, extraClose);
  }

  if (max === 0) return 0;
  console.log(extraClose, max);
  var minSwaps = Math.floor((max + 1) / 2);
  return minSwaps;
}; // console.log(
//   minSwaps(
//     '[[][[[[][][[[[]]][][]]]]][[][[][][]][[[[]]][[]][[]][[]]]]]]]][]][]]][[]][[[[[[][[]][[[][]][[]]]['
//   )
// );


var minAddToMakeValid = function minAddToMakeValid(s) {
  var openCount = 0;
  var extraClose = 0;

  for (var i = 0; i < s.length; i++) {
    var currBracket = s[i];

    if (currBracket == '(') {
      openCount++;
    } else if (currBracket == ')' && openCount > 0) {
      // stops at 0 then adds the extra close space
      openCount--;
    } else {
      extraClose++;
    }
  }

  return openCount + extraClose;
}; //console.log(minAddToMakeValid('()))(('));