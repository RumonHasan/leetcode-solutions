"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var minimumPushes = function minimumPushes(word) {
  var map = new Map();

  for (var i = 0; i < word.length; i++) {
    map.set(word[i], (map.get(word[i]) || 0) + 1);
  }

  var mapVals = _toConsumableArray(map.values()).sort(function (a, b) {
    return b - a;
  });

  var minCounter = 0;
  var limitCounter = 1;
  var digitCounter = 0;

  for (var _i = 0; _i < mapVals.length; _i++) {
    var counter = mapVals[_i];
    minCounter += limitCounter * counter;
    digitCounter++;

    if (digitCounter === 8) {
      limitCounter++;
      digitCounter = 0;
    }
  }

  return minCounter;
}; //console.log(minimumPushes('aabbccddeeffgghhiiiiii'));