"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var repeatedSubstring = function repeatedSubstring(s) {
  var sub = '';
  var totalLen = s.length;
  var currSubLen = sub.length;
  if (s.length === 1) return false;
  if (s.split('').every(function (letter) {
    return letter === s[0];
  })) return true;

  for (var i = 0; i < s.length; i++) {
    var currChar = s[i];
    sub += currChar;
    currSubLen = sub.length;
    var diff = Math.floor(totalLen / currSubLen);

    if (diff <= totalLen / 2 && diff * currSubLen === totalLen && currSubLen < totalLen) {
      var subStringLen = totalLen / currSubLen;
      var substring = sub.repeat(subStringLen);
      if (substring === s) return true;
    }
  }

  return false;
};

var countDistinctInteger = function countDistinctInteger(nums) {
  var greedyApproach = function greedyApproach() {
    var revArr = [];
    var set = new Set();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = nums[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var num = _step.value;
        set.add(num);
        var rev = Number(num.toString().split('').reverse().join(''));
        revArr.push(rev);
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

    for (var _i = 0, _revArr = revArr; _i < _revArr.length; _i++) {
      var _num = _revArr[_i];
      set.add(_num);
    }

    return set.size;
  };
}; //


var longestSpecialSubAtleast3 = function longestSpecialSubAtleast3(s) {
  var map = new Map();
  var stack = [];

  for (var i = 0; i < s.length; i++) {
    var str = s[i];
    map.set(str, (map.get(str) || 0) + 1);

    for (var j = i + 1; j < s.length; j++) {
      if (s[j - 1] === s[j]) {
        str += s[j];
        map.set(str, (map.get(str) || 0) + 1);
      } else {
        break;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = map[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _step2$value = _slicedToArray(_step2.value, 2),
          key = _step2$value[0],
          value = _step2$value[1];

      if (value >= 3) {
        stack.push(key);
      }
    }
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

  ;
  console.log(stack);
  if (stack.length === 0) return -1;
  stack.sort(function (a, b) {
    return a.length - b.length;
  });
  return stack[stack.length - 1].length;
}; //console.log(longestSpecialSubAtleast3("aaaa"));
//console.log(repeatedSubstring("bb"));