"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var minSwapRight = function minSwapRight(nums) {
  var collection = [];
  var local = [nums[0]];

  var checkSort = function checkSort(nums) {
    var newArr = _toConsumableArray(nums).reverse().flat();

    var existing = _toConsumableArray(nums).flat().sort(function (a, b) {
      return a - b;
    });

    return newArr.join('') === existing.join('');
  };

  for (var i = 1; i < nums.length; i++) {
    var curr = nums[i];
    var prev = nums[i - 1];

    if (curr > prev) {
      local.push(curr);
    } else {
      collection.push(local);
      local = [curr];
    }

    if (i === nums.length - 1) {
      collection.push(local);
      local = [curr];
    }
  }

  if (collection.length === 1) return 0;
  if (collection.length > 2) return -1;
  var check = checkSort(collection);
  return check ? collection[collection.length - 1].length : -1;
}; // has to have only one pivot point
// alternate approach would be directly finding multiple pivot points and then checking


console.log(minSwapRight([27, 33, 42, 58, 81, 8, 9, 17]));