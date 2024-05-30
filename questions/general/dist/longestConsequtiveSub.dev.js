"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var longestConsequtiveSub = function longestConsequtiveSub(nums) {
  var optimizedSetApproach = function optimizedSetApproach() {
    var set = new Set(_toConsumableArray(nums));
    if (nums.length === 0) return 0;
    var maxCount = 1;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = nums[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var num = _step.value;
        var right = num + 1;

        if (!set.has(right)) {
          var left = num - 1;
          var count = 1;

          if (set.has(left)) {
            while (set.has(left)) {
              left--;
              count++;
            }

            maxCount = Math.max(maxCount, count);
          } else {
            continue;
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return maxCount;
  };
}; // max consequtive floor question


var maxConsequtiveFloors = function maxConsequtiveFloors(bottom, top, special) {
  var TLE = function TLE() {
    var maxConsequtive = 0;
    var floors = [];
    var specialSet = new Set(_toConsumableArray(special));

    for (var i = bottom; i <= top; i++) {
      if (!specialSet.has(i)) {
        floors.push(i);
      }
    }

    var range = [];
    var start = floors[0];
    var end = floors[0];

    for (var _i = 1; _i < floors.length; _i++) {
      var currFloor = floors[_i];
      var prevFloor = floors[_i - 1];

      if (prevFloor !== currFloor - 1) {
        end = prevFloor;
        range.push([start, end]);
        start = currFloor;
        end = currFloor;
      } else {
        end = currFloor;
      }

      if (_i === floors.length - 1) {
        range.push([start, end]);
      }
    }

    if (floors.length === 0) return 0;
    console.log(range);

    for (var _i2 = 0; _i2 < range.length; _i2++) {
      maxConsequtive = Math.max(Math.abs(range[_i2][0] - range[_i2][1]) + 1, maxConsequtive);
    }

    return maxConsequtive;
  }; // optimized but TLE


  var sorted = function sorted() {
    special.sort(function (a, b) {
      return a - b;
    });
    var maxFloorCount = 0;
    var localFloorCount = 0;
    var sIndex = 0;

    for (var floor = bottom; floor <= top; floor++) {
      var currFloor = floor;

      if (currFloor === special[sIndex]) {
        localFloorCount = 0;
        sIndex++;
      } else {
        localFloorCount++;
      }

      maxFloorCount = Math.max(maxFloorCount, localFloorCount);
    }

    return maxFloorCount;
  }; // using set to check the gap of the specials instead of checking teh entire range


  var setApproach = function setApproach() {
    special.sort(function (a, b) {
      return a - b;
    });
    var maxGapCount = 0;

    for (var i = 0; i < special.length; i++) {
      var currSpecialFloor = special[i];
      var prevSpecialFloor = special[i - 1];

      if (i === 0) {
        maxGapCount = Math.max(maxGapCount, currSpecialFloor - bottom);
      } else if (i === special.length - 1) {
        var localMax = Math.max(top - currSpecialFloor, currSpecialFloor - prevSpecialFloor);
        maxGapCount = Math.max(maxGapCount, localMax);
      } else {
        maxGapCount = Math.max(maxGapCount, currSpecialFloor - prevSpecialFloor - 1);
      }
    }

    return maxGapCount;
  }; //console.log(setApproach());

}; // 2 3 4 5 6 7 8 9


console.log(maxConsequtiveFloors(28, 50, [35, 48]));

var revIII = function revIII(s) {
  return s.split('').map(function (_, i) {
    return s.charAt(s.length - 1 - i);
  }).join('').split(' ').reverse().join(' ');
}; // console.log(revIII("Let's take LeetCode contest"));