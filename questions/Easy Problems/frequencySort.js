const frequencySort = (nums) => {
  const intuitiveApproach = () => {
    let sortedNums = nums.sort((a, b) => a - b);
    let freqArray = [];
    for (let index in sortedNums) {
      if (
        freqArray.length &&
        freqArray[freqArray.length - 1][0] === sortedNums[index]
      ) {
        freqArray[freqArray.length - 1][1] += 1;
      } else {
        freqArray.push([sortedNums[index], 1]);
      }
    }
    freqArray.sort((a, b) => a[1] - b[1]);
    let localArray = [freqArray[0]];
    let collection = [];
    for (let index = 1; index < freqArray.length; index++) {
      if (
        localArray.length &&
        localArray[localArray.length - 1][1] === freqArray[index][1]
      ) {
        localArray.push(freqArray[index]);
        if (index === freqArray.length - 1) {
          let localSorted = localArray.sort((a, b) => b[0] - a[0]);
          for (let subIndex in localSorted) {
            collection.push(localSorted[subIndex]);
            break;
          }
        }
      } else {
        let localSorted = localArray.sort((a, b) => b[0] - a[0]);
        for (let subIndex in localSorted) {
          collection.push(localSorted[subIndex]);
        }
        localArray = [];
        localArray.push(freqArray[index]);
      }
      if (index === freqArray.length - 1) {
        collection.push(freqArray[index]);
      }
    }
    console.log(collection);
    // populating array
    let final = [];
    for (let index = 0; index < collection.length; index++) {
      for (let subIndex = 0; subIndex < collection[index][1]; subIndex++) {
        final.push(collection[index][0]);
      }
    }
    return final;
  };

  console.log(intuitiveApproach());
};

console.log(frequencySort([2, 3, 1, 3, 2]));
