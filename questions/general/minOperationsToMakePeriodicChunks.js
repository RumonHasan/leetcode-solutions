const minOpPeriodicChunks = (word, k) => {
  let map = new Map();
  let string = '';
  let maxFreq = 0;
  for (let i = 0; i < word.length; i++) {
    const currChar = word[i];
    string += currChar;
    if (string.length === k) {
      map.set(string, (map.get(string) || 0) + 1);
      if (string.length) {
        maxFreq = Math.max(maxFreq, map.get(string));
      }
      string = '';
    }
  }
  let mapVals = [...map.values()];
  let totalChunks = mapVals.reduce((a, b) => a + b, 0);
  return totalChunks - maxFreq;
};

// have to form k periodic partitions then calculate the total frequency then subtracted with the chunks to find the number of operations needed
console.log(minOpPeriodicChunks('leetcodeleet', 4));
