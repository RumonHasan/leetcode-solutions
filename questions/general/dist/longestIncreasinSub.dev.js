"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var longestIncreasingSubsequence = function longestIncreasingSubsequence(nums) {
  var dp = new Array(nums.length).fill(1);

  for (var i = nums.length - 1; i >= 0; i--) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max.apply(Math, _toConsumableArray(dp));
}; //console.log(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]));
// slowest key press O(n) but ugly solution


var slowestKey = function slowestKey(releaseTimes, keysPressed) {
  var keys = [];
  var keyMap = new Map();
  var maxDuration = 0;

  for (var i = 0; i < releaseTimes.length; i++) {
    var currKey = keysPressed[i];
    var currReleaseTime = releaseTimes[i];
    var prevReleaseTime = releaseTimes[i - 1];
    var duration = 0;

    if (i === 0) {
      duration = currReleaseTime;
    } else {
      duration = currReleaseTime - prevReleaseTime;
    }

    maxDuration = Math.max(duration, maxDuration);

    if (keyMap.has(currKey)) {
      if (keyMap.get(currKey) < duration) {
        keyMap.set(currKey, duration);
      }
    } else {
      keyMap.set(currKey, duration);
    }
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = keyMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      if (value === maxDuration) {
        keys.push(key);
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

  return keys.sort(function (a, b) {
    return b.localeCompare(a);
  })[0];
}; //console.log(slowestKey([9, 29, 49, 50], 'cbcd'));


var binarySubstring = function binarySubstring(s) {
  // making groups
  var groups = [];
  var counter = 1;
  var prev = s[0];

  for (var i = 1; i < s.length; i++) {
    var currChar = s[i];

    if (currChar == prev) {
      counter++;
    } else {
      groups.push(counter);
      counter = 1;
      prev = currChar;
    }

    if (i === s.length - 1) {
      groups.push(counter);
    }
  } // have to take the minimum value of the adjacent pairs since 1s and 0s should be consequtive


  var sum = 0;

  for (var index = 1; index < groups.length; index++) {
    var curr = groups[index];
    var _prev = groups[index - 1];
    sum += Math.min(curr, _prev);
  }

  return sum;
};

console.log(binarySubstring('00110011'));