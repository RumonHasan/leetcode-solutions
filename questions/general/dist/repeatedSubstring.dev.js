"use strict";

var repeatedSubstring = function repeatedSubstring(s) {
  var sub = '';
  var totalLen = s.length;
  var currSubLen = sub.length;
  if (s.length === 1) return false;
  if (s.split('').every(function (letter) {
    return letter === s[0];
  })) return true;

  for (var i = 0; i < s.length; i++) {
    var currChar = s[i];
    sub += currChar;
    currSubLen = sub.length;
    var diff = Math.floor(totalLen / currSubLen);

    if (diff <= totalLen / 2 && diff * currSubLen === totalLen && currSubLen < totalLen) {
      var subStringLen = totalLen / currSubLen;
      var substring = sub.repeat(subStringLen);
      if (substring === s) return true;
    }
  }

  ;
  return false;
}; //console.log(repeatedSubstring("bb"));