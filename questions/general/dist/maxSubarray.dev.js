"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var maxSubarray = function maxSubarray(nums) {
  var end = 1;
  var stack = new Array(nums.length).fill(0);
  stack[0] = nums[0]; // using the subarray approach

  while (end < nums.length) {
    var currNum = nums[end];
    stack[end] = Math.max(currNum, currNum + stack[end - 1]);
    end++;
  }

  return Math.max.apply(Math, _toConsumableArray(stack));
};

var kItemsWithMaximumSum = function kItemsWithMaximumSum(numOnes, numZeros, numNegOnes, k) {
  var formArray = function formArray(len, type) {
    var stack = [];

    for (var i = 0; i < len; i++) {
      if (type === '0') {
        stack.push(0);
      } else if (type === '1') {
        stack.push(1);
      } else {
        stack.push(-1);
      }
    }

    return stack;
  };

  var array = [].concat(_toConsumableArray(formArray(numOnes, '1')), _toConsumableArray(formArray(numZeros, '0')), _toConsumableArray(formArray(numNegOnes, '-1'))).sort(function (a, b) {
    return b - a;
  });
  var totalSum = array[0];
  var counter = 1;
  if (counter === k) return totalSum;
  if (k === 0) return 0;

  for (var i = 1; i < array.length; i++) {
    totalSum += array[i];
    counter++;
    if (counter === k) break;
  }

  return totalSum;
}; // valid stack sequence


var validStackSequence = function validStackSequence(pushed, popped) {
  var stack = [];
  var commonLen = pushed.length + 1;
  var popIndex = 0;

  for (var i = 0; i < commonLen; i++) {
    while (popIndex < popped.length && popped[popIndex] === stack[stack.length - 1]) {
      stack.pop();
      popIndex++;
    }

    var currPush = pushed[i];
    stack.push(currPush);
  }

  for (var _i = 0, _stack = stack; _i < _stack.length; _i++) {
    var val = _stack[_i];

    if (val !== undefined) {
      return false;
    }
  }

  return true;
}; // remove k duplicates


var removeDuplicates = function removeDuplicates(s, k) {
  var stack = [[s[0], 1]];
  var end = 1;

  while (end < s.length) {
    if (stack.length && s[end] == stack[stack.length - 1][0]) {
      stack[stack.length - 1][1] = stack[stack.length - 1][1] + 1;
    } else {
      stack.push([s[end], 1]);
    } // popping logic when the consequtive repeatitions hit k number


    if (stack[stack.length - 1][1] === k) {
      stack.pop();
    }

    end++;
  }

  var result = '';

  for (var _i2 = 0, _stack2 = stack; _i2 < _stack2.length; _i2++) {
    var val = _stack2[_i2];
    result += val[0].repeat(val[1]);
  }

  return result;
}; //console.log(removeDuplicates('deeedbbcccbdaa', 3));
//console.log(validStackSequence([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]));
//console.log(kItemsWithMaximumSum(3, 2, 0, 4));
//console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));