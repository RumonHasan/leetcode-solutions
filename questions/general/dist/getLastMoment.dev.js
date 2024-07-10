"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var getLastMoment = function getLastMoment(n, left, right) {
  var maxLeft = left.length > 0 ? Math.max.apply(Math, _toConsumableArray(left)) : 0;
  var maxRight = right.length > 0 ? n - Math.min.apply(Math, _toConsumableArray(right)) : 0;
  return Math.max(maxLeft, maxRight);
}; //console.log(getLastMoment(20, [9, 3, 13, 10], [4, 7, 15]));


var numOfAlternatingGroups = function numOfAlternatingGroups(colors) {
  var count = 0;

  for (var i = 0; i < colors.length; i++) {
    var first = colors[i];
    var second = colors[i + 1];
    var third = colors[i + 2]; //special case

    if (i === colors.length - 2) {
      if (first === 1 && second === 0 && colors[0] === 1) {
        count++;
      }

      if (first === 0 && second === 1 && colors[0] === 0) {
        count++;
      }
    }

    if (i === colors.length - 1) {
      if (first === 1 && colors[0] === 0 && colors[1] === 1) {
        count++;
      }

      if (first === 0 && colors[0] === 1 && colors[1] === 0) {
        count++;
      }
    }

    if (first === 1 && second === 0 && third === 1) {
      count++;
    }

    if (first === 0 && second === 1 && third === 0) {
      count++;
    }
  }

  return count;
}; //console.log(numOfAlternatingGroups([0, 1, 0, 0, 1]));