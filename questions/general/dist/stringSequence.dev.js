"use strict";

var stringSequence = function stringSequence(target) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var string = '';
  var collection = [];
  var end = 0;

  while (end < target.length) {
    var targetLetter = target[end];

    for (var i = 0; i < alphabet.length; i++) {
      var currAlpha = alphabet[i];
      var tempString = string + currAlpha; // just remember each attempt is added to the collection library

      collection.push(tempString);

      if (targetLetter === currAlpha) {
        // only adds the next letter when its equal
        string += targetLetter;
        break;
      }
    }

    end++;
  }

  return collection;
};

console.log(stringSequence('abc')); // get the peak mountain array index

var peakIndexInMountainArray = function peakIndexInMountainArray(arr) {
  var end = 0;

  while (end < arr.length) {
    if (arr[end + 1] && arr[end + 1] > arr[end]) {
      var peak = 0;

      while (end < arr.length && arr[end + 1] > arr[end]) {
        end++;
      }

      peak = end;

      while (end < arr.length && arr[end + 1] < arr[end]) {
        end++;
      }

      return peak;
    }

    end++;
  }

  return 0;
};

console.log(peakIndexInMountainArray([0, 10, 5, 2]));