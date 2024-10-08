"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var totalFruit = function totalFruit(fruits) {
  var map = new Map();
  var end = 0;
  var start = 0;
  var size = 0;

  while (end < fruits.length) {
    var currFruit = fruits[end];
    map.set(currFruit, (map.get(currFruit) || 0) + 1);

    while (map.size > 2 && start < fruits.length) {
      if (map.has(fruits[start])) {
        map.set(fruits[start], map.get(fruits[start]) - 1);
      }

      if (map.get(fruits[start]) === 0) {
        map["delete"](fruits[start]);
      }

      start++;
    } // since its only two values it can be taken directly from map


    size = Math.max(size, _toConsumableArray(map.values()).reduce(function (a, b) {
      return a + b;
    }, 0));
    end++;
  }

  return size;
}; // longest substring with two distinct elements
//console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]));