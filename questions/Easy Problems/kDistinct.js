const kthDistinct = (arr, k) => {
  const basicIntuitiveApproach = () => {
    let hash = {};
    let position = [];
    for (let char of arr) {
      if (hash[char]) {
        hash[char]++;
      } else {
        hash[char] = 1;
      }
    }
    for (const [key, value] of Object.entries(hash)) {
      if (value === 1) {
        position.push(key);
      }
    }
    return position[k - 1] === undefined ? '' : position[k - 1];
  };
};

//console.log(kthDistinct(['d', 'b', 'c', 'b', 'c', 'a'], 2));
