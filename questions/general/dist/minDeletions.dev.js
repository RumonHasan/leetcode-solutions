"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var minDeletions = function minDeletions(nums) {
  var min = Math.min.apply(Math, _toConsumableArray(nums));
  var max = Math.max.apply(Math, _toConsumableArray(nums));
  var checkMax = false;
  var checkMin = false;
  var leftMoves = 0;
  var rightMoves = 0;
  var doubleMoves = 0; // from left and right

  var leftRight = function leftRight(index, type) {
    if (type !== 'max' || type !== 'min') {
      var _checkMax = false;
      var _checkMin = false;
      var moveCounter = 0;

      for (var i = index; type === 'left' ? i < nums.length : i >= 0; type === 'left' ? i++ : i--) {
        var currNum = nums[i];
        moveCounter++;

        if (currNum === min) {
          _checkMin = true;
        }

        if (currNum === max) {
          _checkMax = true;
        }

        if (_checkMin && _checkMax) {
          break;
        }
      }

      return moveCounter;
    }

    return 0;
  };

  leftMoves = leftRight(0, 'left');
  rightMoves = leftRight(nums.length - 1, 'right'); // two pointers;

  var l = 0;

  for (var i = 0; i < nums.length; i++) {
    doubleMoves++;

    if (nums[i] === min) {
      checkMin = true;
    } else if (nums[i] === max) {
      checkMax = true;
    }

    if (checkMax || checkMin) {
      break;
    }
  }

  for (var _i = nums.length - 1; _i >= 0; _i--) {
    doubleMoves++;

    if (nums[_i] === min) {
      checkMin = true;
    } else if (nums[_i] === max) {
      checkMax = true;
    }

    if (checkMax && checkMin) {
      break;
    }
  }

  return Math.min(leftMoves, rightMoves, doubleMoves);
}; //console.log(minDeletions([2, 10, 7, 5, 4, 1, 8, 6]));