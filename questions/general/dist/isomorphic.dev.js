"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var isomorphicString = function isomorphicString(s, t) {
  var map = new Map();
  var mapTwo = new Map();
  if (s.length !== t.length) return false;

  for (var i = 0; i < s.length; i++) {
    var sChar = s[i];
    var tChar = t[i]; // false condition

    if (map.has(sChar) && map.get(sChar) !== tChar || mapTwo.has(tChar) && mapTwo.get(tChar) !== sChar) return false;
    map.set(sChar, tChar);
    mapTwo.set(tChar, sChar);
  }

  return true;
};

console.log(isomorphicString('badc', 'baba'));

var findAndReplace = function findAndReplace(words, pattern) {
  var list = [];

  var checkPattern = function checkPattern(word, wordTwo) {
    if (word.length !== wordTwo.length) return false;
    var hash = {};
    var hashTwo = {};
    var end = 0;

    while (end < word.length) {
      // false statement
      if (hash[word[end]] && hash[word[end]] !== wordTwo[end] || hashTwo[wordTwo[end]] && hashTwo[wordTwo[end]] && hashTwo[wordTwo[end]] !== word[end]) return false;
      hash[word[end]] = wordTwo[end];
      hashTwo[wordTwo[end]] = word[end];
      end++;
    }

    return true;
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = words[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var word = _step.value;

      if (checkPattern(word, pattern)) {
        list.push(word);
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

  return list;
}; // console.log(findAndReplace(['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc'], 'abb'));
// counting unique minutes


var findingUsersActiveMinutes = function findingUsersActiveMinutes(logs, k) {
  var uamDp = new Array(k).fill(0); // uam dp is calculated from 1 to 5 -> based on the UAM count

  var uamMap = new Map();

  for (var i = 0; i < logs.length; i++) {
    var currLog = logs[i];

    var _currLog = _slicedToArray(currLog, 2),
        user = _currLog[0],
        time = _currLog[1];

    if (uamMap.has(user)) {
      var currUamVal = uamMap.get(user); // set

      if (!currUamVal.has(time)) {
        uamMap.get(user).add(time);
      }
    } else {
      uamMap.set(user, new Set([time]));
    }
  }

  var uamCountMap = new Map(); // map for uam count based on uamMap
  // populate map with 1 to k values first

  for (var _i2 = 1; _i2 <= k; _i2++) {
    uamCountMap.set(_i2, 0);
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = uamMap[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _step2$value = _slicedToArray(_step2.value, 2),
          _ = _step2$value[0],
          value = _step2$value[1];

      var valLen = value.size;

      if (uamCountMap.has(valLen)) {
        uamCountMap.set(valLen, (uamCountMap.get(valLen) || 0) + 1);
      }
    } // populating the UAMdp array

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

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = uamCountMap[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var _step3$value = _slicedToArray(_step3.value, 2),
          key = _step3$value[0],
          val = _step3$value[1];

      var keyNum = Number(key);
      uamDp[keyNum - 1] = val;
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return uamDp;
};

console.log(findingUsersActiveMinutes([[0, 5], [1, 2], [0, 2], [0, 5], [1, 3]], 5));