"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var maxImportanceRoads = function maxImportanceRoads(n, roads) {
  var nodeMap = new Map();

  for (var i = 0; i < n; i++) {
    nodeMap.set(i, 0);
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = roads[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var road = _step.value;
      var left = road[0];
      var right = road[1];
      nodeMap.set(left, (nodeMap.get(left) || 0) + 1);
      nodeMap.set(right, (nodeMap.get(right) || 0) + 1);
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

  var sortedNodes = [];
  var nCount = 1; // for multiplication of the labels

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = nodeMap[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _step2$value = _slicedToArray(_step2.value, 2),
          key = _step2$value[0],
          value = _step2$value[1];

      sortedNodes.push([Number(key), value]);
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

  sortedNodes.sort(function (a, b) {
    return a[1] - b[1];
  });
  var total = 0;

  for (var _i = 0; _i < sortedNodes.length; _i++) {
    total += sortedNodes[_i][1] * nCount;
    nCount++;
  }

  return total;
}; //console.log(maxImportanceRoads(5, [[0, 1]]));


var revString = function revString(s) {
  var left = 0;
  var right = Math.floor(s.length / 2);

  while (left < right) {
    var temp = s[left];
    s[left] = s[s.length - 1 - left];
    s[s.length - 1 - left] = temp;
    left++;
  }

  return s;
};

console.log(revString(['h', 'e', 'l', 'l', 'o']));