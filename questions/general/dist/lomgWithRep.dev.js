"use strict";

var longestWithoutRepeat = function longestWithoutRepeat(nums, k) {
  var map = new Map();
  var end = 0;
  var start = 0;
  var maxLen = 0;

  while (end < nums.length) {
    var currNum = nums[end];
    map.set(currNum, (map.get(currNum) || 0) + 1);

    while (map.get(nums[end]) > k) {
      map.set(nums[start], map.get(nums[start]) - 1);

      if (map.get(nums[start]) === 0) {
        map["delete"](nums[start]);
      }

      start++;
    }

    maxLen = Math.max(end - start + 1, maxLen);
    end++;
  }

  return maxLen;
}; // trying to locate disjoint pairs and adding the sum to check for k equivalent for the solution unclean solution


var maxPairs = function maxPairs(nums, k) {
  var map = new Map();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = nums[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var num = _step.value;
      map.set(num, (map.get(num) || 0) + 1);
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

  var operationCount = 0;

  for (var i = 0; i < nums.length; i++) {
    var currNum = nums[i];
    var compliment = k - currNum;

    if (map.has(compliment) && map.has(currNum)) {
      if (compliment === currNum && map.get(compliment) < 2) {
        continue;
      }

      var complimentValue = map.get(compliment);
      var currNumVal = map.get(currNum);

      if (complimentValue >= 1 && currNumVal >= 1) {
        map.set(compliment, map.get(compliment) - 1);
        map.set(currNum, map.get(currNum) - 1);

        if (map.get(currNum) <= 0) {
          map["delete"](currNum);
        }

        if (map.get(complimentValue) <= 0) {
          map["delete"](complimentValue);
        }

        operationCount++;
      }
    }
  }

  return operationCount;
}; // divide players and total of each team has to be equal using sorting and two pointer approach


var dividePlayers = function dividePlayers(skills) {
  skills.sort(function (a, b) {
    return a - b;
  });
  var midIndex = skills.length / 2;
  var total = 0;
  var collectors = new Set();

  for (var i = 0; i < midIndex; i++) {
    var currNumLeft = skills[i];
    var currNumRight = skills[skills.length - i - 1];
    var totalSkill = currNumLeft + currNumRight;
    collectors.add(totalSkill);
    total += currNumLeft * currNumRight;
  }

  if (collectors.size > 1) {
    return -1;
  }

  return total;
}; //console.log(dividePlayers([3, 2, 5, 1, 3, 4]));