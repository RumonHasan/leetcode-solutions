const minimumDeletions = (word, k) => {
  const map = new Map();
  let minDeletion = Infinity;

  for (const char of word) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  let values = [...map.values()];

  for (const baseFreq of values) {
    let deletions = 0;

    for (let freq of values) {
      if (freq < baseFreq) {
        deletions += Number(freq);
      } else if (freq > baseFreq + k) {
        deletions += Number(freq - (baseFreq + k));
      }
    }

    minDeletion = Math.min(minDeletion, deletions);
  }

  return minDeletion;
};

console.log(minimumDeletions('dabdcbdcdcd', 2));
