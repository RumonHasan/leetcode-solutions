const palindromePartitioning = (s) => {
  let result = [];
  // pal check
  const palCheck = (s, i, j) => {
    while (i <= j) {
      if (s[i] !== s[j]) return false;
      i++;
      j--;
    }
    return true;
  };
  // main dfs search to check for every partition
  const dfs = (index, partition) => {
    if (index > s.length - 1) {
      return result.push([...partition]); // update the partition if the index hits the last element
    }
    for (let j = index; j < s.length; j++) {
      if (palCheck(s, index, j)) {
        const partitionSub = s.slice(index, j + 1);
        partition.push(partitionSub);
        dfs(j + 1, partition); // dfs call to start from the next index
        partition.pop(); // cleaning up for backtracking
      }
    }
    return partition;
  };
  dfs(0, []);

  return result;
};

console.log(palindromePartitioning('aab'));
