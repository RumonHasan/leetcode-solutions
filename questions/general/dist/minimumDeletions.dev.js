"use strict";

var minimumDeletionsTillBalanced = function minimumDeletionsTillBalanced(s) {
  var aDp = new Array(s.length).fill(0);
  var minCount = s.length; // cannot exceed the total length of s

  for (var i = s.length - 1; i >= 0; i--) {
    var currChar = s[i];

    if (i === s.length - 1) {
      if (currChar === 'a') {
        aDp[i] = 1;
      } else {
        aDp[i] = 0;
      }
    } // remaining checking right for a


    if (i < s.length - 1) {
      var nextDpVal = aDp[i + 1];

      if (currChar === 'a') {
        aDp[i] = nextDpVal + 1;
      } else {
        aDp[i] = nextDpVal;
      }
    }
  } // checking for b then calculating minimum value


  var bCount = 0;

  for (var _i = 0; _i < s.length; _i++) {
    // minimzing the count
    minCount = Math.min(minCount, bCount + (_i < s.length - 1 ? aDp[_i + 1] : 0)); // here have to checking whether there elements to teh right or not

    if (s[_i] == 'b') {
      bCount++;
    }
  }

  return minCount;
}; // finding a middle point to cut off and make all the a letter on the left and b letter to the right
// console.log(
//   minimumDeletionsTillBalanced(
//     'aabbbbaabababbbbaaaaaabbababaaabaabaabbbabbbbabbabbababaabaababbbbaaaaabbabbabaaaabbbabaaaabbaaabbbaabbaaaaabaa'
//   )
// );