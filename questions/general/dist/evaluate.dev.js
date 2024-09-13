"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var evaluate = function evaluate(s, knowledge) {
  var map = new Map(knowledge);

  var sArray = _toConsumableArray(s);

  var end = 0;
  var stack = [];

  while (end < sArray.length) {
    var currChar = sArray[end];

    if (currChar == '(') {
      var str = '';
      end++;

      while (sArray[end] !== ')') {
        str += sArray[end];
        end++;
      }

      if (!map.has(str)) {
        stack.push('?');
      } else {
        var key = map.get(str);
        stack.push(key);
      }

      end++;
    } else {
      stack.push(currChar);
      end++;
    }
  }

  return stack.join('');
};

console.log(evaluate('hi(name)', [['a', 'b']]));