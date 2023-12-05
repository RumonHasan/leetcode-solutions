const partitionLabels = (s) => {
  console.log(s);
  const intervalApproach = () => {
    // making intervals
    let intervalMap = new Map();
    for (let index = 0; index < s.length; index++) {
      const char = s[index];
      if (!intervalMap.has(char)) {
        intervalMap.set(char, [index, s.lastIndexOf(char)]);
      }
    }
    // find overlapping intervals
    let intervals = [...intervalMap.values()];
    let collection = [];
    let startInterval = 0;
    let maxBound = intervals[0][1];
    for (let index = 1; index < intervals.length; index++) {
      const lowerBound = intervals[index][0];
      const upperBound = intervals[index][1];
      //checking whether the intervals are merged or not
      if (lowerBound < maxBound) {
        maxBound = Math.max(maxBound, upperBound);
      } else {
        collection.push(maxBound - startInterval + 1);
        maxBound = upperBound;
        startInterval = lowerBound;
      }
      if (index === intervals.length - 1) {
        collection.push(maxBound - startInterval + 1);
      }
    }
    return collection;
  };
};

//console.log(partitionLabels('eaaaabaaec'));
