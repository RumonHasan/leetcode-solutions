const beautifulBinaryPartitions = (s) => {
  if (s[0] === '0') return -1; // if it starts from 0 then its entirely invalid
  let cache = new Map(); // will cache existing results of minimum count

  const isPowerOf5 = (n) => {
    const log5 = Math.log(n) / Math.log(5);
    return Math.abs(log5 - Math.round(log5)) < 1e-10;
  };

  // main dfs function
  const dfs = (currIndex, currBinary) => {
    // traversed entire string but  no valid partitions
    if (currIndex >= s.length) {
      return 0;
    }

    if (cache.has(currIndex)) {
      return cache.get(currIndex);
    }

    let minimumCount = Infinity; // initial minimum count

    for (let index = currIndex; index < s.length; index++) {
      const slice = s.slice(currIndex, index + 1);
      const sliceDecimalCheck = isPowerOf5(parseInt(slice, 2));
      // if its a power of 5 then run recursive count
      if (sliceDecimalCheck && slice[0] !== '0') {
        minimumCount = Math.min(
          minimumCount,
          1 + dfs(index + 1, currBinary + slice)
        );
      }
    }

    return minimumCount;
  };

  return dfs(0, '') === Infinity ? -1 : dfs(0, ''); // need count the minimum number of substring partition
};

// using dfs to solve the minimum partitions needed to be created with no leading zeroes
console.log(beautifulBinaryPartitions('111'));
