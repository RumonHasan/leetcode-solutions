"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var pLabels = function pLabels(s) {
  var map = new Map();

  for (var i = 0; i < s.length; i++) {
    var letter = s[i];

    if (map.has(letter)) {
      map.get(letter)[1] = i;
    } else {
      map.set(letter, [i, i]);
    }
  }

  var intervals = _toConsumableArray(map.values()).sort(function (a, b) {
    return a[0] - b[0];
  });

  var result = [];
  var start = intervals[0][0];
  var end = intervals[0][1];

  for (var _i = 1; _i < intervals.length; _i++) {
    var currInterval = intervals[_i];

    if (currInterval[0] > end) {
      var len = end - start + 1;
      result.push(len);
      start = currInterval[0];
      end = currInterval[1];
    }

    if (currInterval[1] > end) {
      end = currInterval[1];
    }

    if (_i === intervals.length - 1) {
      result.push(end - start + 1);
    }
  }

  return result;
}; //console.log(pLabels('ababcbacadefegdehijhklij'));