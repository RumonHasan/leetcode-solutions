"use strict";

var beautifulSubs = function beautifulSubs(s, k) {
  var bruteForceApproach = function bruteForceApproach() {
    var counter = 0;
    var vowelSet = new Set(['a', 'i', 'e', 'o', 'u']);

    for (var i = 0; i < s.length; i++) {
      var vCount = 0;
      var cCount = 0; // checking all sub directly

      for (var j = i; j < s.length; j++) {
        var _char = s[j];

        if (vowelSet.has(_char)) {
          vCount++;
        } else {
          cCount++;
        }

        if (cCount === vCount) {
          var calc = cCount * vCount % k === 0 ? true : false;

          if (calc) {
            counter++;
          }
        }
      }
    }

    return counter;
  };
}; // using brute force approach to check through every substring
//console.log(beautifulSubs('baeyh', 2));


var subarrayRanges = function subarrayRanges(nums) {
  var total = 0;

  for (var i = 0; i < nums.length; i++) {
    var large = -Infinity;
    var min = Infinity;

    for (var j = i; j < nums.length; j++) {
      var curr = nums[j];
      min = Math.min(min, curr);
      large = Math.max(large, curr);
      total += large - min;
    }
  }

  return total;
};

console.log(subarrayRanges([1, 2, 3]));