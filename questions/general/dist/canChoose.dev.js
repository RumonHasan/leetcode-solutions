"use strict";

var canChoose = function canChoose(groups, nums) {
  var end = 0;
  var gIndex = 0;

  while (end < nums.length) {
    var currNum = nums[end];
    var singleGroupNum = groups[gIndex][0];

    if (currNum === singleGroupNum) {
      var subMainIndex = end;
      var check = true;

      for (var i = 0; i < groups[gIndex].length; i++) {
        var gNum = groups[gIndex][i];

        if (nums[subMainIndex] !== gNum) {
          check = false;
          break;
        }

        subMainIndex++;
      } // if match is found then increase to the next array


      if (check) {
        end = subMainIndex;
        gIndex++;

        if (gIndex === groups.length) {
          return true;
        }
      } else {
        end++;
      }
    } else {
      end++;
    }
  }

  return false;
}; // look for disjointed subarrays but in the same order as the groups mentioned
//console.log(canChoose([[-5, 0]], [2, 0, -2, 5, -1, 2, 4, 3, 4, -5, -5]));