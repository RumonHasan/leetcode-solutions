const votes = (votes) => {
  // rank system
  const constructRankingSystem = () => {
    let ranks = {};
    let singleRank = votes[0];
    for (let index in singleRank) {
      ranks[singleRank[index]] = new Array(singleRank.length).fill(0);
    }
    for (let index = 0; index < votes.length; index++) {
      let rankSet = votes[index];
      for (let rankIndex = 0; rankIndex < rankSet.length; rankIndex++) {
        if (ranks[votes[index][rankIndex]]) {
          let prevRankIndexVal = ranks[votes[index][rankIndex]];
          prevRankIndexVal[rankIndex] += 1;
          ranks[votes[index][rankIndex]] = prevRankIndexVal;
        }
      }
    }
    return ranks;
  };
  // sorting the ranks based on keys
  const sortingRanks = (ranks) => {
    const rankKeys = Object.keys(ranks);
    const rankObjectLength = Object.keys(ranks).length;
    return rankKeys.sort((a, b) => {
      for (let index = 0; index < rankObjectLength; index++) {
        if (ranks[a][index] > ranks[b][index]) return -1;
        if (ranks[a][index] < ranks[b][index]) return 1;
      }
      return a < b ? -1 : 1;
    });
  };
  let ranks = constructRankingSystem();
  let sortedRanks = sortingRanks(ranks);
  return sortedRanks.join('');
};

// need to create a rank based system where based on each position the number of votes are displayed
//console.log(votes(['ABC', 'ACB', 'ABC', 'ACB', 'ACB']));
