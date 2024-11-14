"use strict";

var longestSemiRepeatitiveString = function longestSemiRepeatitiveString(s) {
  var maxLen = 0;
  var prevNum = s[0];
  var indexCollection = []; // getting the index points of the starting and ending of each pairs

  for (var i = 1; i < s.length; i++) {
    var currNum = s[i];

    if (currNum === prevNum) {
      indexCollection.push([i - 1, i]);
    }

    prevNum = currNum;
  }

  if (indexCollection.length === 1 || indexCollection.length === 0) return s.length;
  maxLen = Math.max(maxLen, indexCollection[1][0] + 1);

  for (var index = 1; index < indexCollection.length; index++) {
    var prevIndexSet = indexCollection[index - 1];
    var nextIndexSet = indexCollection[index + 1];

    if (index === indexCollection.length - 1) {
      // indicating the final pair
      maxLen = Math.max(maxLen, s.length - prevIndexSet[1]);
    } else {
      maxLen = Math.max(maxLen, nextIndexSet[0] - prevIndexSet[1] + 1);
    }
  }

  return maxLen;
};

console.log(longestSemiRepeatitiveString('5227886336789')); // answer should be 6

/* 
 0, 1,2,3,4,5,6,7,8
1, 2
3, 4



*/