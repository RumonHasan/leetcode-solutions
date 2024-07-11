"use strict";

var eliminateMax = function eliminateMax(dist, speed) {
  var reached = new Array(dist.length).fill(0);
  var commonLen = dist.length;

  for (var i = 0; i < commonLen; i++) {
    var time = Math.ceil(dist[i] / speed[i]);
    reached[i] = time;
  } // time taken to reach the city and attack it


  var attackCount = 0;
  reached.sort(function (a, b) {
    return a - b;
  }); // based on the closest to the city

  for (var _i = 0; _i < reached.length; _i++) {
    var currentMinute = _i;
    var timeToAttack = reached[_i];

    if (currentMinute < timeToAttack) {
      attackCount++;
    }

    if (currentMinute === timeToAttack) {
      break;
    }
  }

  return attackCount;
}; // console.log(
//   eliminateMax([7, 2, 6, 6, 2, 6, 4, 3, 4], [1, 3, 1, 1, 10, 1, 1, 1, 1])
// );