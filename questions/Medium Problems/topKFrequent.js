const topKFrequent = (words, k) => {
  let wordMap = new Map();
  for (let index in words) {
    if (wordMap.has(words[index])) {
      wordMap.set(words[index], wordMap.get(words[index]) + 1);
    } else {
      wordMap.set(words[index], 1);
    }
  }
  let array = [];
  for (let [key, value] of wordMap) {
    array.push([key, value]);
  }
  let sortedArray = array.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0].localeCompare(b[0]);
    } else {
      return b[1] - a[1];
    }
  });
  let resultArray = sortedArray.slice(0, k).map((array) => array[0]);
  return resultArray;
};
// getting two most frequent words
topKFrequent(
  ['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'],
  4
);
