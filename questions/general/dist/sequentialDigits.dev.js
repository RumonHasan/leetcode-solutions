"use strict";

var sequentialDigits = function sequentialDigits(low, high) {
  var digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var minLen = low.toString().length;
  var maxLen = high.toString().length;
  var collection = [];

  for (var i = minLen; i <= maxLen; i++) {
    for (var j = 0; j < 10 - i; j++) {
      var window = digits.slice(j, j + i); // creating slice substrings

      var num = parseInt(window.join(''));

      if (num >= low && num <= high) {
        collection.push(num);
      }
    }
  }

  return collection;
}; // gonna use the upper and lower bounds in order use sliding window
//console.log(sequentialDigits(1000, 13000));


var findValueInPartition = function findValueInPartition(nums) {
  nums.sort(function (a, b) {
    return a - b;
  });
  var min = Infinity;

  for (var i = 1; i < nums.length; i++) {
    var curr = nums[i];
    var prev = nums[i - 1];
    min = Math.min(Math.abs(curr - prev), min);
  }

  return min === Infinity ? 0 : min;
}; //console.log(findValueInPartition([100, 1, 10]));


var distributeCandies = function distributeCandies(candies, num_people) {
  var dp = new Array(num_people).fill(0);
  var candyCounter = 0;
  var index = 0;
  var check = false;
  var round = 0;

  while (candyCounter < candies) {
    if (check) {
      dp[index] += round * num_people + index + 1;
      candyCounter += round * num_people + index + 1;
    } else {
      dp[index] += index + 1;
      candyCounter += index + 1;
    } // will have the break conditions here


    if (candyCounter > candies) {
      var extra = candyCounter - candies;
      dp[index] -= extra;
      break;
    }

    if (index === dp.length - 1) {
      index = 0;
      check = true;
      round++;
      continue;
    }

    index++; //console.log(candyCounter, dp);
  }

  return dp;
}; //console.log(distributeCandies(60, 4));