"use strict";

var rankTeamByVotes = function rankTeamByVotes(votes) {
  var voteMap = new Map();
  var rankLen = votes[0].length; // initialize vote map

  var voteLetters = votes[0];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = voteLetters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _char = _step.value;
      voteMap.set(_char, new Array(rankLen).fill(0));
    } // populate map with the ranks

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  for (var i = 0; i < votes.length; i++) {
    var currVote = votes[i];

    for (var j = 0; j < currVote.length; j++) {
      var currLetter = currVote[j];
      var rank = j + 1;

      if (voteMap.has(currLetter)) {
        var rankIndex = rank - 1;
        voteMap.get(currLetter)[rankIndex] += 1;
      }
    }
  } // sorting the teams by rank array


  var votesArray = Array.from(voteMap.keys());
  votesArray.sort(function (teamA, teamB) {
    var rankingsA = voteMap.get(teamA);
    var rankingsB = voteMap.get(teamB);

    for (var _i = 0; _i < rankingsA.length; _i++) {
      if (rankingsA[_i] !== rankingsB[_i]) {
        return rankingsB[_i] - rankingsA[_i];
      }
    }

    return teamA.localeCompare(teamB);
  });
  return votesArray.join('');
}; // organize the votes by ranking and update a hash map


console.log(rankTeamByVotes(['ABC', 'ACB', 'ABC', 'ACB', 'ACB']));