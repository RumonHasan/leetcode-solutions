"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var beautySub = function beautySub(s) {
  var checkSubstring = function checkSubstring(map) {
    var min = Infinity;
    var max = -Infinity;

    if (map.size > 1) {
      var vals = _toConsumableArray(map.values());

      for (var i = 0; i < vals.length; i++) {
        var currVal = vals[i];

        if (currVal < min) {
          min = currVal;
        }

        if (currVal > max) {
          max = currVal;
        }
      }
    }

    return max - min;
  };

  var total = 0;

  for (var i = 0; i < s.length; i++) {
    var map = new Map();

    for (var j = i; j < s.length; j++) {
      map.set(s[j], (map.get(s[j]) || 0) + 1);
      var diff = checkSubstring(map);

      if (diff !== Infinity && diff !== -Infinity) {
        total += diff;
      }
    }
  }

  return total;
}; //console.log(beautySub('aabcb'));