"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var minDeletionsBoundary = function minDeletionsBoundary(nums) {
  var min = Math.min.apply(Math, _toConsumableArray(nums));
  var max = Math.max.apply(Math, _toConsumableArray(nums));
  var midMaxIndex = 0;
  var midMinIndex = 0; // checking from the left

  var leftCounter = 0;
  var checkMax = false;
  var checkMin = false; // going from the left

  for (var i = 0; i < nums.length; i++) {
    var currNum = nums[i];
    if (checkMax && checkMin) break;

    if (currNum === max) {
      checkMax = true;
      midMaxIndex = i;
    }

    if (currNum === min) {
      checkMin = true;
      midMinIndex = i;
    }

    leftCounter++;
  } // checking from right


  var rightCounter = 0;
  checkMax = false;
  checkMin = false;

  for (var _i = nums.length - 1; _i >= 0; _i--) {
    var _currNum = nums[_i];
    if (checkMax && checkMin) break;

    if (_currNum === max) {
      checkMax = true;
    }

    if (_currNum === min) {
      checkMin = true;
    }

    rightCounter++;
  } // checking from both sides


  var bothSides = 0;
  var smallerIdx = Math.min(midMaxIndex, midMinIndex);
  var largerIdx = Math.max(midMaxIndex, midMinIndex);
  bothSides = smallerIdx + 1 + (nums.length - largerIdx); // no double counting

  return Math.min(leftCounter, rightCounter, bothSides);
};

console.log(minDeletionsBoundary([2, 10, 7, 5, 4, 1, 8, 6]));