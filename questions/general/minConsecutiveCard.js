const minCard = (cards) => {
  let set = new Set([...cards]);
  if (set.size === cards.length) return -1;
  let end = 0;
  let start = 0;
  let map = new Map();
  let minLen = Infinity;
  while (end < cards.length) {
    map.set(cards[end], (map.get(cards[end]) || 0) + 1);
    while (map.get(cards[end]) > 1) {
      minLen = Math.min(minLen, end - start + 1);
      map.set(cards[start], map.get(cards[start]) - 1);
      if (map.get(cards[start]) === 0) {
        map.delete(cards[start]);
      }
      start++;
    }
    end++;
  }
  return minLen;
};

// to get the min array with matching values
// console.log(
//   minCard([
//     70, 37, 70, 41, 1, 62, 71, 49, 38, 50, 29, 76, 29, 41, 22, 66, 88, 18, 85,
//     53,
//   ])
// );

const maxScoreCard = (cardPoints, k) => {
  let total = 0;
  let mainTotal = cardPoints.reduce((a, b) => a + b, 0);
  let subRemovalSize = cardPoints.length - k;
  for (let i = 0; i < subRemovalSize; i++) {
    total += cardPoints[i];
  }
  let maxScore = mainTotal - total;
  for (let i = subRemovalSize; i < cardPoints.length; i++) {
    total -= cardPoints[i - subRemovalSize];
    total += cardPoints[i];
    maxScore = Math.max(maxScore, mainTotal - total);
  }
  return maxScore;
};

console.log(maxScoreCard([1, 2, 3, 4, 5, 6, 1], 3));
