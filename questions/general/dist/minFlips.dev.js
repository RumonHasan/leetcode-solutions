"use strict";

var minFlips = function minFlips(target) {
  var index = 0;
  var counter = 0;
  var tArray = target.split('').map(function (item) {
    return Number(item);
  });
  if (tArray.every(function (item) {
    return item === tArray[0] && item === 0;
  })) return 0; // have to start from the first one since before that u dont need to change

  for (var i = 0; i < tArray.length; i++) {
    if (tArray[i] === 1) {
      index = i;
      break;
    }
  }

  while (index < target.length) {
    if (target[index] === '1') {
      while (index < target.length && target[index] === '1') {
        index++;
      }

      counter++;
    } else {
      while (index < target.length && target[index] === '0') {
        index++;
      }

      counter++;
    }
  }

  return counter;
}; //console.log(minFlips(''));