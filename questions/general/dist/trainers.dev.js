"use strict";

var trainers = function trainers(players, _trainers) {
  players.sort(function (a, b) {
    return a - b;
  });

  _trainers.sort(function (a, b) {
    return a - b;
  });

  var playerIndex = 0;
  var trainerIndex = 0;
  var counter = 0;

  while (trainerIndex < _trainers.length) {
    if (players[playerIndex] <= _trainers[trainerIndex]) {
      counter++;
      playerIndex++;
    }

    trainerIndex++;
  }

  return counter;
}; //console.log(trainers([4, 7, 9], [8, 2, 5, 8]));