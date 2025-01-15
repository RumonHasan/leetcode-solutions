const rankTeamByVotes = (votes) => {
  let voteMap = new Map();
  let rankLen = votes[0].length;
  // initialize vote map
  let voteLetters = votes[0];
  for (let char of voteLetters) {
    voteMap.set(char, new Array(rankLen).fill(0));
  }
  // populate map with the ranks
  for (let i = 0; i < votes.length; i++) {
    const currVote = votes[i];
    for (let j = 0; j < currVote.length; j++) {
      const currLetter = currVote[j];
      const rank = j + 1;
      if (voteMap.has(currLetter)) {
        const rankIndex = rank - 1;
        voteMap.get(currLetter)[rankIndex] += 1;
      }
    }
  }
  // sorting the teams by rank array
  let votesArray = Array.from(voteMap.keys());
  votesArray.sort((teamA, teamB) => {
    const rankingsA = voteMap.get(teamA);
    const rankingsB = voteMap.get(teamB);

    for (let i = 0; i < rankingsA.length; i++) {
      if (rankingsA[i] !== rankingsB[i]) {
        return rankingsB[i] - rankingsA[i];
      }
    }
    return teamA.localeCompare(teamB);
  });

  return votesArray.join('');
};

// organize the votes by ranking and update a hash map
console.log(rankTeamByVotes(['ABC', 'ACB', 'ABC', 'ACB', 'ACB']));
