const largestValsFromLabels = (values, labels, numWanted, useLimit) => {
  let maxSum = 0;
  let labelMap = new Map();
  const labelArray = values
    .map((value, index) => {
      return {
        value,
        label: labels[index],
      };
    })
    .sort((a, b) => b.value - a.value);
  // keeping the count of the labels and seeing whether they exceed the useLimit or not with each iteration
  let totalItems = 0;
  for (let currLabel of labelArray) {
    //
    const currVal = currLabel.value;
    const currLabelVal = currLabel.label;
    const currLabelCount = labelMap.get(currLabelVal) || 0; // gets current Val or 0 for incrementing
    // checking for count and comparing it with useLimit in order to get the value count
    if (currLabelCount < useLimit && totalItems < numWanted) {
      maxSum += currVal;
      labelMap.set(currLabelVal, currLabelCount + 1); // increases the current labelCount here to keep in check
      totalItems++;
    }
  }
  return maxSum;
};

// num limit is numwanted and cannot exceed that
console.log(largestValsFromLabels([2, 6, 3, 6, 5], [1, 1, 2, 1, 1], 3, 1));
