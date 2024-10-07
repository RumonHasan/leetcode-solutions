"use strict";

var divideString = function divideString(s, k, fill) {
  var fillRequired = s.length % k === 0 ? 0 : s.length % k;
  var string = '';
  var result = [];
  var counter = 0;

  for (var i = 0; i < s.length; i++) {
    string += s[i];
    counter++;

    if (counter === k) {
      result.push(string);
      string = '';
      counter = 0;
    }

    if (i === s.length - 1 && string.length > 0) {
      result.push(string);
    }
  }

  if (fillRequired > 0) {
    var newFillReq = k - result[result.length - 1].length;
    var newStr = result[result.length - 1] + fill.repeat(newFillReq);
    result[result.length - 1] = newStr;
  }

  return result;
}; //console.log(divideString('abcdefghii', 3, 'x'));