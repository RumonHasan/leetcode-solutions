"use strict";

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
};

console.log(countPrefSuff(['a', 'aba', 'ababa', 'aa']));