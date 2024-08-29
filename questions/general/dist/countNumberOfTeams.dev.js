"use strict";

var countNumberOfTeams = function countNumberOfTeams(rating) {
  var totalCount = 0;

  for (var i = 1; i < rating.length - 1; i++) {
    var currNum = rating[i];
    var leftCount = 0;
    var rightCount = 0; // ascending order iteration

    for (var left = i - 1; left >= 0; left--) {
      if (rating[left] < currNum) {
        leftCount++;
      }
    }

    for (var right = i + 1; right < rating.length; right++) {
      if (rating[right] > currNum) {
        rightCount++;
      }
    } // descending order iteration


    var leftDesc = 0;
    var rightDesc = 0;

    for (var _left = i - 1; _left >= 0; _left--) {
      if (rating[_left] > currNum) {
        leftDesc++;
      }
    }

    for (var _right = i + 1; _right < rating.length; _right++) {
      if (rating[_right] < currNum) {
        rightDesc++;
      }
    }

    totalCount += leftDesc * rightDesc + leftCount * rightCount;
  }

  return totalCount;
};

console.log(countNumberOfTeams([2, 5, 3, 4, 1]));