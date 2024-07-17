"use strict";

var maxIcecream = function maxIcecream(costs, coins) {
  var sortedCosts = costs.sort(function (a, b) {
    return a - b;
  });
  var total = 0;
  var counter = 0;

  for (var i = 0; i < sortedCosts.length; i++) {
    var currCost = sortedCosts[i];
    total += currCost;
    counter++;

    if (total === coins) {
      break;
    }

    if (total > coins) {
      counter -= 1;
      break;
    }
  }

  return counter;
}; //console.log(maxIcecream([1, 3, 2, 4, 1], 7));


var backspacecompare = function backspacecompare(s, t) {
  var backspaceCheck = function backspaceCheck(string) {
    var stack = [];

    for (var i = 0; i < string.length; i++) {
      if (stack.length && string[i] === '#') {
        stack.pop();
      } else {
        if (string[i] !== '#') {
          stack.push(string[i]);
        }
      }
    }

    return stack.join('');
  };

  return backspaceCheck(s) === backspaceCheck(t);
}; // bowling score


var isWinner = function isWinner(player1, player2) {
  var getTotal = function getTotal(pins) {
    var total = 0;

    for (var i = 0; i < pins.length; i++) {
      var curr = pins[i];
      var prev = pins[i - 1];
      var prevprev = pins[i - 2];

      if (prev === 10 || prevprev === 10) {
        var _double = curr * 2;

        total += _double;
      } else {
        total += curr;
      }
    }

    return total;
  };

  var player1Score = getTotal(player1);
  var player2Score = getTotal(player2);
  return player1Score > player2Score ? 1 : player2Score > player1Score ? 2 : 0;
}; //console.log(isWinner([5, 10, 3, 2], [6, 5, 7, 3]));