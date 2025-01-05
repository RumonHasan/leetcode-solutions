"use strict";

var shiftingLetters = function shiftingLetters(s, shifts) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var pref = new Array(shifts.length).fill(0); // needs total shifts from its position

  pref[pref.length - 1] = shifts[shifts.length - 1];

  for (var i = shifts.length - 2; i >= 0; i--) {
    pref[i] = pref[i + 1] + shifts[i];
  } // have to change based on the total shifts from the end


  var res = '';

  for (var _i = 0; _i < s.length; _i++) {
    var currChar = s[_i];
    var currPos = pref[_i];
    var alphaPos = alphabet.indexOf(currChar);
    var newPos = (currPos + alphaPos) % 26; // to offset it by 26 if its more

    res += alphabet[newPos];
  }

  return res;
};

console.log(shiftingLetters('abc', [3, 5, 9]));