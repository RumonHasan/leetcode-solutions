"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
// check whether swapping atleast one letter can equal to goal or not


var buddyStrings = function buddyStrings(s, goal) {
  if (s.length !== goal.length) return false;
  var set = new Set(s);
  if (s == goal) return set.size < goal.length; // checking whether the letters are same or not
  // basic oc map to get occurence

  var createOc = function createOc(string) {
    var map = new Map();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = string[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _char = _step.value;
        map.set(_char, (map.get(_char) || 0) + 1);
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

    return map;
  };

  var sMap = createOc(s);
  var gMap = createOc(goal);
  console.log(sMap, gMap); // checking with each occurence

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = sMap[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _step2$value = _slicedToArray(_step2.value, 2),
          key = _step2$value[0],
          value = _step2$value[1];

      if (gMap.has(key) && gMap.get(key) !== value || !gMap.has(key)) {
        return false;
      }
    } // final check to see whether any of the letters appear at two different places or not

  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  var counter = 0;

  for (var i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      counter++;
    }
  }

  return counter < 3;
};

console.log(buddyStrings('abcd', 'badc'));