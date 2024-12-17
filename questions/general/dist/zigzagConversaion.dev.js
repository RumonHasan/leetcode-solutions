"use strict";

var zig = function zig(s, numRows) {
  var result = new Array(numRows).fill('');
  var direction = false;
  var countIndex = 0;
  if (numRows === 1) return s;

  for (var i = 0; i < s.length; i++) {
    var curr = s[i];

    if (countIndex === numRows - 1) {
      direction = false;
    } else if (countIndex === 0) {
      direction = true;
    }

    result[countIndex] += curr; // adding characters either way

    countIndex = direction ? countIndex + 1 : countIndex - 1;
  }

  return result.join('');
}; //console.log(zig('AB', 1));


var maxScore = function maxScore(s) {
  var rightOne = new Array(s.length).fill(0);
  var leftZero = new Array(s.length).fill(0);

  for (var i = 0; i < s.length; i++) {
    var curr = s[i];

    if (curr === '0') {
      if (leftZero[i - 1]) {
        leftZero[i] = leftZero[i - 1] + 1;
      } else {
        leftZero[i] = 1;
      }
    } else {
      leftZero[i] = leftZero[i - 1] ? leftZero[i - 1] : leftZero[i];
    }
  }

  for (var _i = s.length - 1; _i >= 0; _i--) {
    var _curr = s[_i];

    if (_curr === '1') {
      if (rightOne[_i + 1]) {
        rightOne[_i] = rightOne[_i + 1] + 1;
      } else {
        rightOne[_i] = 1;
      }
    } else {
      rightOne[_i] = rightOne[_i + 1] ? rightOne[_i + 1] : rightOne[_i];
    }
  }

  var maxScore = 0;

  for (var _i2 = 0; _i2 < s.length - 1; _i2++) {
    maxScore = Math.max(maxScore, rightOne[_i2 + 1] + leftZero[_i2]);
  }

  return maxScore;
};

console.log(maxScore('00'));