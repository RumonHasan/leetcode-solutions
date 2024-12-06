const canMakePaliQueries = (s, queries) => {
  const timeLimitExceeded = () => {
    let checks = new Array(queries.length).fill(false);
    for (const queryIndex in queries) {
      const query = queries[queryIndex];
      const substring = s.slice(query[0], query[1] + 1);
      const changes = query[2];

      let map = new Map();
      for (let char of substring) {
        map.set(char, (map.get(char) || 0) + 1);
      }
      let oddCounter = 0;
      for (let [key, value] of map) {
        if (value % 2 !== 0) {
          oddCounter++;
        }
      }
      let localCheck = false;
      if (substring.length === 1) {
        localCheck = true;
      } else if (changes === 0) {
        localCheck = false;
      } else {
        localCheck = Math.floor(oddCounter / 2) <= changes;
      }
      checks[queryIndex] = localCheck;
    }
    return checks;
  };
};

console.log(
  canMakePaliQueries('abcda', [
    [3, 3, 0],
    [1, 2, 0],
    [0, 3, 1],
    [0, 3, 2],
    [0, 4, 1],
  ])
);
