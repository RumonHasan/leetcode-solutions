"use strict";

var replaceArray = function replaceArray(arr) {
  var bruteForceApproach = function bruteForceApproach() {
    var dp = new Array(arr.length).fill(0);
    dp[dp.length - 1] = -1;

    for (var i = 0; i < arr.length - 1; i++) {
      var currMax = -Infinity;

      for (var j = i + 1; j < arr.length; j++) {
        var currSubEl = arr[j];

        if (currMax < currSubEl) {
          currMax = currSubEl;
        }
      }

      dp[i] = currMax;
    }

    return dp;
  }; // faster optimzied approach -- reverse order iteration


  var optimizedApproach = function optimizedApproach(arr) {
    var dp = new Array(arr.length).fill(0);
    var currLargest = arr[arr.length - 1];

    for (var i = arr.length - 1; i >= 0; i--) {
      var currEl = arr[i];

      if (arr.length - 1 === i) {
        dp[i] = -1;
      }

      if (i < arr.length - 1) {
        dp[i] = currLargest;

        if (currLargest < currEl) {
          currLargest = currEl;
        }
      }
    }

    return dp;
  }; //console.log(optimizedApproach([17, 18, 5, 4, 6, 1]));

}; // have to keep track of the upcoming next max element in order to populate the array
//console.log(replaceArray([17, 18, 5, 4, 6, 1]));