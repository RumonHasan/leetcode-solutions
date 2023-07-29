const canBeEqual = (target, arr) => {
  const basicHashApproach = () => {
    let hash = {};
    let hashTwo = {};
    for (let index in arr) {
      hash[arr[index]] ? hash[arr[index]]++ : (hash[arr[index]] = 1);
      hashTwo[target[index]]
        ? hashTwo[target[index]]++
        : (hashTwo[target[index]] = 1);
    }
    for (let [key, value] of Object.entries(hash)) {
      if (hashTwo[key] && hashTwo[key] !== value) {
        return false;
      }
      if (!hashTwo[key]) return false;
    }
    return true;
  };
};

//console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]));
