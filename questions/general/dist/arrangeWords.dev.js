"use strict";

var arrangeWords = function arrangeWords(text) {
  var array = text.split(' ').map(function (word, index) {
    return [word, word.length, index];
  }).sort(function (a, b) {
    return a[1] - b[1];
  });
  return array.map(function (word, index) {
    return index === 0 ? word[0][0].toUpperCase() + word[0].slice(1, word[0].length) : word[0];
  });
}; //console.log(arrangeWords('calm Keep and code on'));