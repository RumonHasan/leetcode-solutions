const bestPokerHand = (ranks, suits) => {
  const intuitiveApproach = () => {
    // flush
    let flushSet = new Set(suits.map((suit) => suit));
    if (flushSet.size === 1) return 'Flush';
    // other stuffs
    let maxRank = 0;
    let rankMap = new Map();
    for (let index = 0; index < ranks.length; index++) {
      const rank = ranks[index];
      rankMap.set(rank, (rankMap.get(rank) || 0) + 1); // short hand syntax for if the rank exists then brings or defaults to 0 then adds 1
      maxRank = Math.max(rankMap.get(rank), maxRank);
    }
    if (maxRank >= 3) {
      return 'Three of a Kind';
    } else if (maxRank >= 2) {
      return 'Pair';
    }
    return 'High Card';
  };
  //console.log(intuitiveApproach());
};

//console.log(bestPokerHand([9, 2, 13, 1, 2], ['b', 'd', 'd', 'b', 'c']));
