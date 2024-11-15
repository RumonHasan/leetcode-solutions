"use strict";

var isDivPossibleTwo = function isDivPossibleTwo(nums, k) {
  var sorted = nums.sort(function (a, b) {
    return a - b;
  });
  var map = new Map();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = nums[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var num = _step.value;
      map.set(num, (map.get(num) || 0) + 1);
    } // removing map elements if freq hits 0;

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

  var removeEl = function removeEl(mapRef, currRef) {
    if (mapRef.get(currRef) === 0) {
      return mapRef["delete"](currRef);
    }
  };

  for (var i = 0; i < sorted.length; i++) {
    var curr = sorted[i];
    if (!map.has(curr)) continue; //skip if no more occurence is present on map

    if (map.get(curr) > 0 && map.has(curr)) {
      var index = 0;
      var currNext = curr;

      while (index < k) {
        // check till k
        if (!map.has(currNext) || map.get(currNext) <= 0) return false; // stops iteration

        if (map.has(currNext)) {
          map.set(currNext, map.get(currNext) - 1);
          removeEl(map, currNext);
        }

        currNext++; // increasing and checking.... no counter value needed

        index++;
      }
    }
  }

  return true;
}; // each group should have k elements that are consequtive ;


console.log(isDivPossibleTwo([5, 7, 8, 8, 7, 4, 3, 6], 1));