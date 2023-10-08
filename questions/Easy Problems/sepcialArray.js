const specialArray = (nums) => {
  const generalIntuitiveApproach = () => {
    let sortedNums = nums.sort((a, b) => a - b);
    for (let index = 1; index <= sortedNums.length; index++) {
      const x = index;
      let counter = 0;
      for (let subIndex = 0; subIndex < sortedNums.length; subIndex++) {
        const number = sortedNums[subIndex];
        if (number >= x) {
          counter++;
        }
      }
      if (counter === x) {
        return counter;
      }
    }
    return -1;
  };
  //console.log(generalIntuitiveApproach());
};

//console.log(specialArray([3, 6, 7, 7, 0]));
