"use strict";

var maxBags = function maxBags(capacity, rocks, additionalRocks) {
  var bags = [];

  for (var i in capacity) {
    bags.push([capacity[i], rocks[i]]);
  }

  bags.sort(function (a, b) {
    return Math.abs(a[1] - a[0]) - Math.abs(b[1] - b[0]);
  });
  console.log(bags);

  for (var _i = 0, _bags = bags; _i < _bags.length; _i++) {
    var currBag = _bags[_i];

    if (currBag[0] !== currBag[1]) {
      var diff = currBag[0] - currBag[1];

      if (additionalRocks >= diff) {
        additionalRocks -= diff;
        currBag[1] = currBag[0];
      } else {
        break;
      }
    }
  }

  var counter = 0;

  for (var _i2 = 0, _bags2 = bags; _i2 < _bags2.length; _i2++) {
    var _currBag = _bags2[_i2];

    if (_currBag[0] === _currBag[1]) {
      counter++;
    }
  }

  return counter;
}; //console.log(maxBags([2, 3, 7, 4, 5], [1, 2, 2, 4, 4], 2));


var minOperations = function minOperations(nums) {
  var counter = 0;

  for (var i = 1; i < nums.length; i++) {
    if (nums[i - 1] >= nums[i]) {
      var addition = nums[i - 1] - nums[i] + 1;
      counter += addition;
      nums[i] += addition;
    }
  }

  return counter;
}; //console.log(minOperations([1,5,2,4,1]))