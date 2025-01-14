"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var stringMatching = function stringMatching(words) {
  var bruteForceAproach = function bruteForceAproach() {
    var counter = 0;
    var array = [];

    for (var i = 0; i < words.length; i++) {
      var checkWord = words[i];

      for (var j = 0; j < words.length; j++) {
        if (i !== j) {
          var patMatch = words[j];

          if (patMatch.includes(checkWord)) {
            array.push(checkWord);
            counter++;
          }
        }
      }
    }

    return _toConsumableArray(new Set([].concat(array)));
  }; // creating a LPS array for KMP approach


  var KMPApproach = function KMPApproach() {
    // create LPS array
    var index = 0;

    while (index < words.length) {
      var currWord = words[index];
      var LPS = new Array(currWord.length).fill(0);
      var prevLPS = 0; // for going through the lps array

      var wordIndex = 1; // for going through the word

      while (wordIndex < currWord.length) {
        if (currWord[wordIndex] === currWord[prevLPS]) {
          // if the current letter is same as the prevLPS letter
          LPS[wordIndex] = prevLPS + 1;
          prevLPS += 1;
          wordIndex++;
        } else if (prevLPS === 0) {
          // stops it at 0 since there is no more lps value behind it
          LPS[wordIndex] = 0;
          wordIndex += 1;
        } else {
          // if its not equal then shift the prevLPS value backwards
          prevLPS = LPS[prevLPS - 1]; // goes back till the end
        }
      }

      console.log(LPS);
      index++;
    }
  };

  console.log(KMPApproach());
}; // console.log(stringMatching(['aaaacaaa', 'mass', 'as', 'hero', 'superhero']));


var minOperations = function minOperations(boxes) {
  var newBoxes = boxes.split('');
  var prefLeft = new Array(boxes.length).fill(0);
  var rightLeft = new Array(boxes.length).fill(0);
  var ballsCount = 0;
  var movesCount = 0; // getting the left to right side

  for (var i = 0; i < newBoxes.length; i++) {
    prefLeft[i] += movesCount;

    if (newBoxes[i] === '1') {
      ballsCount++;
    }

    movesCount += ballsCount;
  } // getting the right to left side


  ballsCount = 0;
  movesCount = 0;

  for (var _i = newBoxes.length - 1; _i >= 0; _i--) {
    rightLeft[_i] += movesCount;

    if (newBoxes[_i] === '1') {
      ballsCount++;
    }

    movesCount += ballsCount;
  } // final iteration


  var res = new Array(boxes.length).fill(0);

  for (var _i2 = 0; _i2 < newBoxes.length; _i2++) {
    res[_i2] += rightLeft[_i2] + prefLeft[_i2];
  }

  return res;
}; //console.log(minOperations('001011'));


var groupAnagrams = function groupAnagrams(strs) {
  var map = new Map();

  for (var i = 0; i < strs.length; i++) {
    var curr = strs[i];
    var sorted = curr.split('').sort(function (a, b) {
      return a.localeCompare(b);
    }).join('');

    if (map.has(sorted)) {
      map.get(sorted).push(curr);
    } else {
      map.set(sorted, [curr]);
    }
  }

  var collection = [];
  map.forEach(function (value, _) {
    return collection.push(value);
  });
  return collection;
}; //console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));


var countPrefSuff = function countPrefSuff(words) {
  var counter = 0;

  var isPrefixSuffix = function isPrefixSuffix(checkWord, matchWord) {
    // checking start
    var startCheck = false;
    var checkIndex = 0;

    for (var i = 0; i < matchWord.length; i++) {
      if (matchWord[i] === checkWord[checkIndex]) {
        checkIndex++;
      } else {
        break;
      }
    }

    if (checkIndex === checkWord.length) {
      startCheck = true;
    } // checking end


    var endCheck = false;
    checkIndex = checkWord.length - 1;

    for (var _i3 = matchWord.length - 1; _i3 >= 0; _i3--) {
      if (matchWord[_i3] === checkWord[checkIndex]) {
        checkIndex--;
      } else {
        break;
      }
    }

    if (checkIndex === -1) {
      // last first element to check
      endCheck = true;
    }

    return startCheck && endCheck;
  };

  for (var i = 0; i < words.length; i++) {
    var checkWord = words[i];

    for (var j = i + 1; j < words.length; j++) {
      var matchWord = words[j];

      if (isPrefixSuffix(checkWord, matchWord)) {
        counter++;
      }
    }
  }

  return counter;
}; //console.log(countPrefSuff(['a', 'aba', 'ababa', 'aa']));


var wordSubsets = function wordSubsets(words1, words2) {
  var map = new Map();
  if (words2.length === 0) return []; // get max freq based on chars of all the words2

  for (var i = 0; i < words2.length; i++) {
    var word = words2[i];
    var localMap = new Map();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = word[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _char = _step.value;
        localMap.set(_char, (localMap.get(_char) || 0) + 1);
      } // updating the big map

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
      for (var _iterator2 = localMap[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _step2$value = _slicedToArray(_step2.value, 2),
            key = _step2$value[0],
            value = _step2$value[1];

        if (map.has(key) && value > map.get(key)) {
          map.set(key, value);
        }

        if (!map.has(key)) {
          map.set(key, value);
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
  }

  var collection = []; // checking with words1 in order to find whether its possible or not

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = words1[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var _word = _step3.value;
      var wordMap = new Map();
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = _word[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _char2 = _step4.value;
          wordMap.set(_char2, (wordMap.get(_char2) || 0) + 1);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
            _iterator4["return"]();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      var check = true;
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = map[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var _step5$value = _slicedToArray(_step5.value, 2),
              _key = _step5$value[0],
              _value = _step5$value[1];

          if (!wordMap.has(_key) || wordMap.has(_key) && _value > wordMap.get(_key)) {
            check = false;
            break;
          }
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
            _iterator5["return"]();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      if (check) {
        collection.push(_word);
      }
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

  return collection;
};

var countingWordsWithGivenPrefix = function countingWordsWithGivenPrefix(words, pref) {
  var count = 0;

  var isPrefCheck = function isPrefCheck(word, pref) {
    var prefIndex = 0;

    for (var i = 0; i < word.length; i++) {
      var letter = word[i];

      if (letter === pref[prefIndex]) {
        prefIndex++;
      } else {
        break;
      }
    }

    return prefIndex === pref.length;
  };

  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    for (var _iterator6 = words[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      var word = _step6.value;

      if (isPrefCheck(word, pref)) {
        count++;
      }
    }
  } catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
        _iterator6["return"]();
      }
    } finally {
      if (_didIteratorError6) {
        throw _iteratorError6;
      }
    }
  }

  return count;
};

console.log(countingWordsWithGivenPrefix(['pay', 'attention', 'practice', 'attend'], 'at')); // frequency sort

var frequencySort = function frequencySort(s) {
  var map = new Map();
  var _iteratorNormalCompletion7 = true;
  var _didIteratorError7 = false;
  var _iteratorError7 = undefined;

  try {
    for (var _iterator7 = s[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
      var _char3 = _step7.value;
      map.set(_char3, (map.get(_char3) || 0) + 1);
    }
  } catch (err) {
    _didIteratorError7 = true;
    _iteratorError7 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
        _iterator7["return"]();
      }
    } finally {
      if (_didIteratorError7) {
        throw _iteratorError7;
      }
    }
  }

  var collection = [];
  var _iteratorNormalCompletion8 = true;
  var _didIteratorError8 = false;
  var _iteratorError8 = undefined;

  try {
    for (var _iterator8 = map[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
      var _step8$value = _slicedToArray(_step8.value, 2),
          key = _step8$value[0],
          value = _step8$value[1];

      collection.push([key, value]);
    }
  } catch (err) {
    _didIteratorError8 = true;
    _iteratorError8 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
        _iterator8["return"]();
      }
    } finally {
      if (_didIteratorError8) {
        throw _iteratorError8;
      }
    }
  }

  collection.sort(function (a, b) {
    return b[1] - a[1];
  });
  var res = '';

  for (var i = 0; i < collection.length; i++) {
    var currCollection = collection[i];
    res += currCollection[0].repeat(currCollection[1]);
  }

  return res;
}; //console.log(frequencySort('cccaaa'));