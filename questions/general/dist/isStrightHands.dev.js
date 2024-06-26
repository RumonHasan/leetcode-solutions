"use strict";

var isNStraightHands = function isNStraightHands(hand, groupSize) {
  var handLen = hand.length;
  if (handLen % groupSize !== 0) return false;
  var map = new Map();

  for (var i = 0; i < hand.length; i++) {
    var currHand = hand[i];
    map.set(currHand, (map.get(currHand) || 0) + 1);
  }

  var sortedKeys = hand.sort(function (a, b) {
    return a - b;
  });
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = sortedKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var vals = _step.value;
      var key = vals;

      if (map.has(key) && map.get(key) > 0) {
        map.set(key, map.get(key) - 1);

        for (var _i = 0; _i < groupSize - 1; _i++) {
          key += 1;
          if (map.get(key) === 0 || !map.has(key)) return false;
          map.set(key, map.get(key) - 1);
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

  return true;
}; //console.log(isNStraightHands([1,1,2,2,3,3], 3));