"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var maximumGain = function maximumGain(s, x, y) {
  var _ref = x > y ? ['ab', 'ba'] : ['ba', 'ab'],
      _ref2 = _slicedToArray(_ref, 2),
      firstSub = _ref2[0],
      secondSub = _ref2[1];

  var _ref3 = x > y ? [x, y] : [y, x],
      _ref4 = _slicedToArray(_ref3, 2),
      maxPoints = _ref4[0],
      secondMax = _ref4[1];

  var points = 0;

  var populateStack = function populateStack(arr, basePoints, sub) {
    var localPoints = 0;
    var stack = [];

    for (var i = 0; i < arr.length; i++) {
      var _char = arr[i];

      if (_char == sub[1] && stack.length && stack[stack.length - 1] == sub[0]) {
        stack.pop();
        localPoints += basePoints;
      } else {
        stack.push(_char);
      }
    }

    return {
      localPoints: localPoints,
      stack: stack
    };
  };

  var _populateStack = populateStack(s, maxPoints, firstSub),
      localPoints = _populateStack.localPoints,
      stack = _populateStack.stack;

  points += localPoints;

  var _populateStack2 = populateStack(stack, secondMax, secondSub),
      pointsTwo = _populateStack2.localPoints;

  points += pointsTwo;
  return points;
}; //console.log(maximumGain('aabbaaxybbaabb', 5, 4));