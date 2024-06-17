"use strict";

var minIncrementForUnique = function minIncrementForUnique(nums) {
  // efficient solution
  var sortingSolution = function sortingSolution() {
    nums.sort(function (a, b) {
      return a - b;
    });
    var counter = 0;

    for (var i = 1; i < nums.length; i++) {
      var current = nums[i];
      var prev = nums[i - 1];

      if (current === prev) {
        nums[i] += 1;
        counter++;
      } else if (current < prev) {
        var diff = prev - current + 1;
        nums[i] += diff;
        counter += diff;
      }
    }

    return counter;
  }; //const countingSortWay = () => {};

};

console.log(minIncrementForUnique([3, 2, 1, 2, 1, 7])); // 1 1 2 2 3 7
// 1 2 3 2