"use strict";

var maxMinSize = function maxMinSize(s, maxLetters, minSize, maxSize) {
  var map = new Map();
  var subMap = new Map();
  var string = '';
  var maxSubCount = 0;

  for (var i = 0; i < minSize; i++) {
    var currLetter = s[i];
    map.set(currLetter, (map.get(currLetter) || 0) + 1);
    string += currLetter;
  }

  if (map.size <= maxLetters) {
    subMap.set(string, (subMap.get(string) || 0) + 1);
    maxSubCount = subMap.get(string);
  }

  var end = minSize;
  var sArray = string.split(''); // remaining sliding window logic

  while (end < s.length) {
    var _currLetter = s[end];
    var firstLetter = sArray.shift();

    if (map.has(firstLetter)) {
      map.set(firstLetter, map.get(firstLetter) - 1);
      if (map.get(firstLetter) === 0) map["delete"](firstLetter);
    }

    sArray.push(_currLetter);

    if (map.get(_currLetter)) {
      map.set(_currLetter, map.get(_currLetter) + 1);
    } else {
      map.set(_currLetter, 1);
    }

    var newString = sArray.join('');

    if (map.size <= maxLetters) {
      subMap.set(newString, (subMap.get(newString) || 0) + 1);
      maxSubCount = Math.max(maxSubCount, subMap.get(newString));
    }

    end++;
  }

  return maxSubCount;
}; // using minSize to check since checking with minSize will have higher chances of existing
//console.log(maxMinSize('aaaaacbc', 2, 4, 6));
// have to check such that two nums are equal and their indices diff is <= k


var containsDuplicate = function containsDuplicate(nums, k) {
  var map = new Map();

  for (var i = 0; i < nums.length; i++) {
    var currNum = nums[i];

    if (!map.has(currNum)) {
      map.set(currNum, [i, 0]); // adding trippled indexing
    } else {
      if (map.has(currNum)) {
        var abDiff = Math.abs(map.get(currNum)[0] - i);
        if (abDiff <= k) return true;
        map.get(currNum)[0] = i;
      }
    }
  }

  return false;
}; // using a simple map approach and deducting the indices
// console.log(containsDuplicate([1, 0, 1, 1], 1));


var minLengthEncoding = function minLengthEncoding(words) {
  var set = new Set(words);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = words[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var word = _step.value;

      for (var i = 0; i < word.length; i++) {
        if (i > 0) {
          set["delete"](word.slice(i));
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

  var hashCount = set.size;
  var len = 0;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = set[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _word = _step2.value;
      len += _word.length;
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

  return hashCount + len;
};

console.log(minLengthEncoding(['feipyxx', 'e']));