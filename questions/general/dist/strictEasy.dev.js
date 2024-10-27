"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var strictEasy = function strictEasy(nums) {
  for (var i = 0; i < nums.length; i++) {
    var newNums = _toConsumableArray(nums);

    newNums.splice(i, 1);
    var check = true;

    for (var _i = 0; _i < newNums.length; _i++) {
      var currNum = newNums[_i];
      var nextNum = newNums[_i + 1];

      if (nextNum <= currNum) {
        check = false;
      }
    }

    if (check) return true;
  }

  return false;
}; // maximum count = 1
// converting the comparison in brackets and checking
//console.log(strictEasy([1, 2, 10, 5, 7]));