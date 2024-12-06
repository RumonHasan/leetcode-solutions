"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var addingSpaces = function addingSpaces(s, spaces) {
  var stack = [];
  var spaceIndex = 0;

  for (var i = 0; i < s.length; i++) {
    var currentSpaceIndex = spaces[spaceIndex];
    var currChar = s[i];

    if (i === currentSpaceIndex) {
      stack.push(' ');
      spaceIndex++;
    }

    stack.push(currChar);
  }

  return stack.join('');
}; // console.log(addingSpaces('LeetcodeHelpsMeLearn', [8, 13, 15]));


var canChooose = function canChooose(groups, nums) {
  var groupIndex = 0;
  var i = 0;

  while (i < nums.length) {
    var currNum = nums[i]; // if the first num is equal then check ohter combinations

    if (currNum === groups[groupIndex][0]) {
      var local = i;
      var check = true;

      for (var j = 0; j < groups[groupIndex].length; j++) {
        var groupEl = groups[groupIndex][j];

        if (groupEl !== nums[local]) {
          check = false;
          break;
        }

        local++;
      } // checking whether group is present or not


      if (!check) {
        i++;
      } else if (check) {
        groupIndex++;
        i = local;
      }

      if (groupIndex === groups.length) return true;
    } else {
      i++;
    }
  }

  return false;
};

console.log(canChooose([[9099312, -7882487, -1441304, 6624042, -6043305]], [-1441304, 9099312, -7882487, -1441304, 6624042, -6043305, -1441304]));

var firstUnique = function firstUnique(s) {
  var hash = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = s[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _char2 = _step.value;
      hash[_char2] = (hash[_char2] || 0) + 1;
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

  var _char = '';

  for (var _i = 0, _Object$entries = Object.entries(hash); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    if (value === 1) {
      _char = key;
      break;
    }
  }

  return _char ? s.indexOf(_char) : -1;
};

console.log(firstUnique('loveleetcode'));