"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var minimumDeletionsTillBalanced = function minimumDeletionsTillBalanced(s) {
  var aDp = new Array(s.length).fill(0);
  var minCount = s.length; // cannot exceed the total length of s

  for (var i = s.length - 1; i >= 0; i--) {
    var currChar = s[i];

    if (i === s.length - 1) {
      if (currChar === 'a') {
        aDp[i] = 1;
      } else {
        aDp[i] = 0;
      }
    } // remaining checking right for a


    if (i < s.length - 1) {
      var nextDpVal = aDp[i + 1];

      if (currChar === 'a') {
        aDp[i] = nextDpVal + 1;
      } else {
        aDp[i] = nextDpVal;
      }
    }
  } // checking for b then calculating minimum value


  var bCount = 0;

  for (var _i = 0; _i < s.length; _i++) {
    // minimzing the count
    minCount = Math.min(minCount, bCount + (_i < s.length - 1 ? aDp[_i + 1] : 0)); // here have to checking whether there elements to teh right or not

    if (s[_i] == 'b') {
      bCount++;
    }
  }

  return minCount;
}; // finding a middle point to cut off and make all the a letter on the left and b letter to the right
// console.log(
//   minimumDeletionsTillBalanced(
//     'aabbbbaabababbbbaaaaaabbababaaabaabaabbbabbbbabbabbababaabaababbbbaaaaabbabbabaaaabbbabaaaabbaaabbbaabbaaaaabaa'
//   )
// );
// checing whether all a before b or or not.. return true or false


var checkAllBeforeA = function checkAllBeforeA(s) {
  var arr = _toConsumableArray(s);

  if (arr.every(function (l) {
    return l == 'b';
  }) || arr.every(function (l) {
    return l == 'a';
  })) return true;
  var aCount = 0;
  var firstBIndex = s.indexOf('b');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = s[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _char = _step.value;
      _char === 'a' && aCount++;
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

  var checkACount = 0;

  for (var i = 0; i < firstBIndex; i++) {
    if (arr[i] === 'a') checkACount++;
  }

  return checkACount === aCount;
}; //console.log(checkAllBeforeA('aaabbb'));