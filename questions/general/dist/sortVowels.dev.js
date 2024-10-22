"use strict";

var sortVowels = function sortVowels(s) {
  var vowelHash = {
    a: true,
    i: true,
    e: true,
    o: true,
    u: true,
    A: true,
    I: true,
    E: true,
    O: true,
    U: true
  };
  var vowelArray = [];
  var sArray = s.split('');
  var vString = '';

  for (var index in s) {
    if (vowelHash[s[index]]) {
      vString += s[index];
      sArray[index] = '';
    }
  }

  for (var _index in vString) {
    var charCode = vString.charCodeAt(Number(_index));
    vowelArray.push([vString[_index], charCode]);
  }

  vowelArray.sort(function (a, b) {
    return a[1] - b[1];
  });
  var vIndex = 0;

  for (var i = 0; i < sArray.length; i++) {
    if (sArray[i] == '') {
      sArray[i] = vowelArray[vIndex][0];
      vIndex++;
    }
  }

  return sArray.join('');
};

console.log(sortVowels('lEetcOde'));