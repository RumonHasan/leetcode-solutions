"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var sumOdd = function sumOdd(nums) {
  var sum = 0; // brute force approach

  for (var i = 0; i < nums.length; i++) {
    for (j = i; j < nums.length; j++) {
      var subArray = nums.slice(i, j + 1);

      if (subArray.length % 2 === 1) {
        sum += subArray.reduce(function (a, b) {
          return a + b;
        }, 0);
      }
    }
  }

  return sum;
}; // sum odd lengths
//console.log(sumOdd([1, 4, 2, 5, 3]));


var minFlips = function minFlips(target) {
  // brute force
  var bruteForce = function bruteForce() {
    var counter = 0;
    var arr = target.split('').map(function (item) {
      return Number(item);
    });
    var dp = new Array(arr.length).fill(0);

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== dp[i]) {
        if (arr[i] === 0) {
          for (var _j = i; _j < dp.length; _j++) {
            dp[_j] = 0;
          }
        } else if (arr[i] === 1) {
          for (var _j2 = i; _j2 < dp.length; _j2++) {
            dp[_j2] = 1;
          }
        }

        counter++;
      }
    }

    return counter;
  }; // just traversing and checking throught target array instead of maintaining an alternate suffix arrray


  var optimized = function optimized() {
    var counter = 0;
    var arr = target.split('').map(function (item) {
      return Number(item);
    });
    var start = 0; // starting index to check from 1

    for (var i in target) {
      // because initial 0s need not be checked
      if (arr[i] === 1) {
        start = Number(i);
        break;
      }
    } // edge case for when all target is 0


    if (arr.every(function (item) {
      return item === 0;
    })) return 0;
    var end = start;

    while (end < arr.length) {
      if (arr[end] === 1) {
        while (end < arr.length && arr[end] === 1) {
          end++;
        }

        counter++;
      } else {
        while (end < arr.length && arr[end] === 0) {
          end++;
        }

        counter++;
      }
    }

    return counter;
  }; //console.log(optimized()); // focusing only on the target array

};

console.log(minFlips('10111')); // getting the chars in the center rather than taking from both sides

var takeCharsFromLeftToRight = function takeCharsFromLeftToRight(s, k) {
  var map = new Map();
  if (k === 0) return 0;
  if (s.length < 3) return -1;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = s[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _char = _step.value;

      if (_char === 'a' || _char === 'b' || _char === 'c') {
        map.set(_char, (map.get(_char) || 0) + 1);
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

  if (map.size < 3) return -1; // subtracting the values till the limit

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = map[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _step2$value = _slicedToArray(_step2.value, 2),
          key = _step2$value[0],
          _ = _step2$value[1];

      map.set(key, map.get(key) - k);
      if (map.get(key) < 0) return -1;
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

  var counterMap = new Map();
  var end = 0;
  var start = 0;
  var maxLen = 0; // remember that the counter map can have max of main map frequency

  while (end < s.length) {
    counterMap.set(s[end], (counterMap.get(s[end]) || 0) + 1);

    while (map.get(s[end]) < counterMap.get(s[end])) {
      counterMap.set(s[start], counterMap.get(s[start]) - 1);
      start++;
    }

    maxLen = Math.max(maxLen, end - start + 1);
    end++;
  }

  return s.length - maxLen;
}; //console.log(takeCharsFromLeftToRight('aabaaaacaabc', 2));


var numberOfEqualDominoes = function numberOfEqualDominoes(dominoes) {
  var count = 0;
  var map = new Map();

  for (var i = 0; i < dominoes.length; i++) {
    var currDomino = dominoes[i].join('');
    var reverse = dominoes[i].reverse().join(''); // adding both reverse and normal domino

    count += map.get(currDomino) || 0;

    if (map.has(reverse) && reverse !== currDomino) {
      // to make sure about the same numbers
      count += map.get(reverse) || 0;
    } // adding the current domino to the map


    if (map.has(currDomino)) {
      map.set(currDomino, map.get(currDomino) + 1);
    } else {
      map.set(currDomino, 1);
    }
  }

  return count;
}; // console.log(
//   numberOfEqualDominoes([
//     [1, 2],
//     [1, 2],
//     [1, 1],
//     [1, 2],
//     [2, 2],
//   ])
// );


var duplicateZeroes = function duplicateZeroes(arr) {
  var dp = new Array(arr.length).fill(0);
  var end = 0;
  var arrIndex = 0;

  while (end < dp.length) {
    var currElement = arr[arrIndex];

    if (currElement !== 0) {
      dp[end] = currElement;
      end++;
    } else if (currElement === 0) {
      end += 2;
    }

    arrIndex++;
  }

  for (var i = 0; i < dp.length; i++) {
    arr[i] = dp[i];
  }
}; // duplicating zeroes and pushing the remaining digits out and maintaining the same length
//console.log(duplicateZeroes([1, 0, 2, 3, 0, 4, 5, 0]));