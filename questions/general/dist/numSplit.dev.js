"use strict";

var numSplit = function numSplit(s) {
  var rightSet = new Set();
  var leftSet = new Set();
  var counter = 0;
  var left = new Array(s.length).fill(0);
  var right = new Array(s.length).fill(0); // populating the sets and sizes

  for (var i = 0; i < s.length; i++) {
    var currChar = s[i];
    leftSet.add(currChar);
    left[i] = leftSet.size;
  }

  for (var _i = s.length - 1; _i >= 0; _i--) {
    var _currChar = s[_i];
    rightSet.add(_currChar);
    right[_i] = rightSet.size;
  } // comparing both the left and right array


  for (var _i2 = 0; _i2 < left.length; _i2++) {
    if (left[_i2] === right[_i2 + 1]) {
      counter++;
    }
  }

  return counter;
}; // using split array and adding based on set sizes
// console.log(numSplit('aacaba'));
// keeping track of even and odd indices separately in order to check for equality


var waysToMakeFair = function waysToMakeFair(nums) {
  var even = new Array(nums.length).fill(0);
  var odd = new Array(nums.length).fill(0);

  for (var i = 0; i < nums.length; i++) {
    var currNum = nums[i];

    if (i % 2 === 0) {
      even[i] = i === 0 ? currNum : even[i - 1] + currNum;
      odd[i] = odd[i - 1] ? odd[i - 1] : 0;
    } else {
      odd[i] = odd[i - 1] + currNum;
      even[i] = even[i - 1] ? even[i - 1] : 0;
    }
  }

  var fairCounter = 0;
  var len = nums.length - 1; // sorting out the even and odd indices

  for (var _i3 = 0; _i3 < nums.length; _i3++) {
    // note even becomes odd and odd becomes even;
    if (_i3 === 0) {
      var evenSum = odd[len];
      var oddSum = even[len] - nums[0];
      if (evenSum === oddSum) fairCounter++;
    } else {
      var _evenSum = even[_i3 - 1] + (odd[len] - odd[_i3]);

      var _oddSum = odd[_i3 - 1] + (even[len] - even[_i3]);

      if (_evenSum === _oddSum) fairCounter++;
    }
  }

  return fairCounter++;
}; //console.log(waysToMakeFair([2, 1, 6, 4]));

/**
 * 1 6 4
 * 2 6 4 - Even = 6 , Odd = 6
 */
// apple


var appleDistribution = function appleDistribution(apple, capacity) {
  capacity.sort(function (a, b) {
    return b - a;
  });
  var appleSum = apple.reduce(function (a, b) {
    return a + b;
  }, 0);
  var boxCount = 0; // check apple distribution

  for (var i = 0; i < capacity.length; i++) {
    var currSumCap = capacity[i];
    appleSum -= currSumCap;
    boxCount++;

    if (appleSum === 0 || appleSum < 0) {
      break;
    }
  }

  return boxCount++;
}; //console.log(appleDistribution([5, 5, 5], [2, 4, 2, 7]));