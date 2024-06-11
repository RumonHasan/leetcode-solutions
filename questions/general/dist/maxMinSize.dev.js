"use strict";

var maxMinSize = function maxMinSize(s, maxLetters, minSize, maxSize) {
  var map = new Map();
  var subMap = new Map();
  var string = '';
  var maxSubCount = 0;

  for (var i = 0; i < minSize; i++) {
    var currLetter = s[i];
    map.set(currLetter, (map.get(currLetter) || 0) + 1);
    string += currLetter;
  }

  if (map.size <= maxLetters) {
    subMap.set(string, (subMap.get(string) || 0) + 1);
    maxSubCount = subMap.get(string);
  }

  var end = minSize;
  var sArray = string.split(''); // remaining sliding window logic

  while (end < s.length) {
    var _currLetter = s[end];
    var firstLetter = sArray.shift();

    if (map.has(firstLetter)) {
      map.set(firstLetter, map.get(firstLetter) - 1);
      if (map.get(firstLetter) === 0) map["delete"](firstLetter);
    }

    sArray.push(_currLetter);

    if (map.get(_currLetter)) {
      map.set(_currLetter, map.get(_currLetter) + 1);
    } else {
      map.set(_currLetter, 1);
    }

    var newString = sArray.join('');

    if (map.size <= maxLetters) {
      subMap.set(newString, (subMap.get(newString) || 0) + 1);
      maxSubCount = Math.max(maxSubCount, subMap.get(newString));
    }

    end++;
  }

  return maxSubCount;
}; // using minSize to check since checking with minSize will have higher chances of existing


console.log(maxMinSize('aaaaacbc', 2, 4, 6));