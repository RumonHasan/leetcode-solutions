"use strict";

var numberOfMatchingSubsequence = function numberOfMatchingSubsequence(s, words) {
  var map = new Map();
  var counter = 0;

  var isSubCheck = function isSubCheck(word, string, map) {
    var index = -1;

    if (map.has(word) && map.get(word)) {
      return map.get(word); // returns true if its a repeated word
    }

    for (var i = 0; i < word.length; i++) {
      var currChar = word[i];
      index = string.indexOf(currChar, index + 1); // searching from the prev position plus one

      if (index === -1) {
        map.set(word, false);
        return false;
      }
    } // if the word is found then update the map


    map.set(word, true);
    return true;
  };

  for (var i = 0; i < words.length; i++) {
    var currWord = words[i];

    if (isSubCheck(currWord, s, map)) {
      counter++;
    }
  }

  return counter;
};

console.log(numberOfMatchingSubsequence('btovxbkumc', ['btovxbku', 'to', 'zueoxxxjme', 'yjkclbkbtl']));