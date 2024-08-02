"use strict";

var longestPalSubstring = function longestPalSubstring(s) {
  var slice = [];
  if (s.length === 1) return s; //spreading from the middle to both left and right

  var expandAroundCenter = function expandAroundCenter(left, right, localSlice, mainSlice) {
    while (left >= 0 && right < s.length && s[left] == s[right]) {
      localSlice.push(s[right]);
      localSlice.unshift(s[left]);
      left--;
      right++;
    }

    if (mainSlice.length < localSlice.length) {
      mainSlice = localSlice;
    }

    return mainSlice;
  };

  var res = '';

  for (var i = 0; i < s.length; i++) {
    var currChar = s[i]; // for expansing oddly

    var sliceCheck = expandAroundCenter(i - 1, i + 1, [currChar], slice); // for expansing evenly

    var finalSlice = expandAroundCenter(i, i + 1, [], sliceCheck);

    if (res.length < finalSlice.length) {
      res = finalSlice.join('');
    }
  }

  return res;
}; // console.log(longestPalSubstring('babad'));


var checkIfStringBreakable = function checkIfStringBreakable(s1, s2) {
  var sortString = function sortString(string) {
    return string.split('').sort(function (a, b) {
      return a.localeCompare(b);
    });
  };

  var stringOne = sortString(s1).join('');
  var stringTwo = sortString(s2).join('');
  var checkObj = {
    stringOne: 0,
    stringTwo: 0
  };

  for (var i = 0; i < s1.length; i++) {
    var letterOneCharCode = stringOne.charCodeAt(i);
    var letterTwoCharCode = stringTwo.charCodeAt(i);

    if (letterOneCharCode === letterTwoCharCode) {
      checkObj.stringOne += 1;
      checkObj.stringTwo += 1;
    } else if (letterOneCharCode > letterTwoCharCode) {
      checkObj.stringOne += 1;
    } else {
      checkObj.stringTwo += 1;
    }
  }

  if (checkObj.stringOne !== stringOne.length && checkObj.stringTwo !== stringTwo.length) {
    return false;
  }

  return true;
}; //console.log(checkIfStringBreakable('abc', 'xya'));