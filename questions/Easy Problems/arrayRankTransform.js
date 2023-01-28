const arrayRankTransform = (arr) => {
  let originalIndexSet = [];
  for (let index in arr) {
    originalIndexSet.push({ index: parseInt(index), number: arr[index] });
  }
  const sortedIndexSet = originalIndexSet.sort((a, b) => a.number - b.number);
  let rank = 1;

  for (let i = 0; i < sortedIndexSet.length; i++) {
    if (i === 0) {
      sortedIndexSet[i] = {
        ...sortedIndexSet[i],
        rank: rank,
      };
    } else if (
      i > 0 &&
      sortedIndexSet[i].number === sortedIndexSet[i - 1].number
    ) {
      sortedIndexSet[i] = {
        ...sortedIndexSet[i],
        rank: rank,
      };
    } else {
      rank++;
      sortedIndexSet[i] = {
        ...sortedIndexSet[i],
        rank: rank,
      };
    }
  }
  // placing the ranks
  let rankArray = new Array(arr.length).fill(0);
  for (let index in sortedIndexSet) {
    rankArray[sortedIndexSet[index].index] = sortedIndexSet[index].rank;
  }
  return rankArray;
};

//console.log(arrayRankTransform([40, 10, 20, 30]));
