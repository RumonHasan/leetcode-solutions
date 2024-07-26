"use strict";

var winnerOfGame = function winnerOfGame(colors) {
  var end = 0;
  var aliceScore = 0;
  var bobScore = 0;

  while (end < colors.length) {
    var left = end;

    while (left < colors.length && colors[end] === colors[left]) {
      left++;
    }

    if (left > end) {
      var currPlayer = colors[end];

      if (left - end > 1) {
        var score = left - end - 2;

        if (currPlayer == 'A') {
          aliceScore += score;
        } else {
          bobScore += score;
        }
      }

      end = left;
    } else {
      end++;
    }
  }

  return aliceScore > bobScore ? true : false;
}; //console.log(winnerOfGame('AAABABB'));