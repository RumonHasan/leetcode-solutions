"use strict";

var countMatchingSubarrays = function countMatchingSubarrays(nums, pattern) {
  var simpleBruteForceApproach = function simpleBruteForceApproach() {
    var subarrayLen = pattern.length + 1;
    var counter = 0;

    for (var i = 0; i < nums.length; i++) {
      for (var j = i; j < nums.length; j++) {
        var substring = nums.slice(i, j + 1);

        if (substring.length === subarrayLen) {
          var prev = substring[0];
          var patIndex = 0;
          var check = false;

          for (var k = 1; k < substring.length; k++) {
            var currEl = substring[k];
            var currPat = pattern[patIndex];

            if (currPat === 1 && currEl > prev) {
              check = true;
            } else if (currPat === 0 && currEl === prev) {
              check = true;
            } else if (currPat === -1 && currEl < prev) {
              check = true;
            } else {
              check = false;
              break;
            }

            prev = currEl;
            patIndex++;
          }

          if (check) {
            counter++;
          }
        }
      }
    }

    return counter;
  };
};

console.log(countMatchingSubarrays([1, 4, 4, 1, 3, 5, 5, 3], [1, 0, -1]));