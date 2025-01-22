"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var firstCompleteIndex = function firstCompleteIndex(arr, mat) {
  // default indices counter arrays for both rows and cols
  var rowsIndexArray = new Array(mat.length).fill(0);
  var colsIndexArray = new Array(mat[0].length).fill(0);
  var ROW_LEN = mat[0].length; // number of cells needed to complete a row

  var COL_LEN = mat.length;
  var map = new Map(); // create table that contains indices of every number

  for (var i = 0; i < mat.length; i++) {
    for (var j = 0; j < mat[i].length; j++) {
      var row = i;
      var col = j;
      var currNum = mat[row][col];
      map.set(currNum, [row, col]);
    }
  } // checking counter for each indices


  for (var _i = 0; _i < arr.length; _i++) {
    var _currNum = arr[_i];

    if (map.has(_currNum)) {
      var _map$get = map.get(_currNum),
          _map$get2 = _slicedToArray(_map$get, 2),
          _row = _map$get2[0],
          _col = _map$get2[1];

      rowsIndexArray[_row]++;
      colsIndexArray[_col]++;
      var rowVal = rowsIndexArray[_row];
      var colVal = colsIndexArray[_col];

      if (rowVal === ROW_LEN || colVal === COL_LEN) {
        return _i;
      }
    }
  }
}; // step -1 getting the table that contains all the cords of each number
// step 2- getting the row index array and col index array to store the counters
// console.log(
//   firstCompleteIndex(
//     [1, 4, 5, 2, 6, 3],
//     [
//       [4, 3, 5],
//       [1, 2, 6],
//     ]
//   )
// );


var countNumberOfGoodSubarrays = function countNumberOfGoodSubarrays(nums, k) {
  var pairMap = new Map();
  var pairCount = 0;
  var len = nums.length;
  var end = 0;
  var left = 0;
  var totalPairCount = 0;

  while (end < nums.length) {
    pairMap.set(nums[end], (pairMap.get(nums[end]) || 0) + 1); // adding elements and their count

    pairCount += pairMap.get(nums[end]) - 1; // example count 4 means there can be 3 combination of pairs
    // if the pair count exceeds k then reduce it and calculate the number of subarrays

    if (pairCount >= k) {
      while (left < nums.length && pairCount >= k) {
        totalPairCount += len - end; // reduce the pairs

        pairMap.set(nums[left], (pairMap.get(nums[left]) || 0) - 1);
        pairCount -= pairMap.get(nums[left]);

        if (pairMap.get(nums[left]) === 0) {
          pairMap["delete"](nums[left]);
        }

        left++;
      }
    }

    end++;
  }

  return totalPairCount;
}; // console.log(countNumberOfGoodSubarrays([3, 1, 4, 3, 2, 2, 4], 2));


var resultArray = function resultArray(nums) {
  var one = [];
  var two = [];

  for (var i = 0; i < nums.length; i++) {
    var curr = nums[i];

    if (i === 0) {
      one.push(nums[i]);
    } else if (i === 1) {
      two.push(nums[i]);
    } else {
      var check = one[one.length - 1] > two[two.length - 1];

      if (check) {
        one.push(curr);
      } else {
        two.push(curr);
      }
    }
  }

  return [].concat(one, two);
}; //console.log(resultArray([2, 1, 3]));


var mostCommonWords = function mostCommonWords(paragraph, banned) {
  var arr = paragraph.toLowerCase().replace(/[!?',;.]/g, ' ') // replace punctuation with spaces
  .split(/\s+/) // split on whitespace
  .filter(function (word) {
    return word;
  });
  var maxCounter = 0;
  var map = new Map(); // main iteration

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var word = _step.value;
      var wordLower = word.toLowerCase();

      if (!banned.includes(wordLower)) {
        map.set(wordLower, (map.get(wordLower) || 0) + 1);

        if (map.get(wordLower) > maxCounter) {
          maxCounter = map.get(wordLower);
        }
      }
    } // getting the max key of value

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

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = map[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _step2$value = _slicedToArray(_step2.value, 2),
          key = _step2$value[0],
          value = _step2$value[1];

      if (value === maxCounter) {
        return key;
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
};

console.log(mostCommonWords('Bob hit a ball, the hit BALL flew far after it was hit.', ['hit']));