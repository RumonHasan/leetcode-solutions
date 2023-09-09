const missingNumber = (nums) => {
  const initialIntuitiveApproachButSlowApproach = () => {
    let range = [0, nums.length];
    let rangeArray = [];
    for (let index = range[0]; index <= range[1]; index++) {
      rangeArray.push(index);
    }
    for (let index = 0; index < rangeArray.length; index++) {
      const number = rangeArray[index];
      if (!nums.includes(number)) {
        return number;
      }
    }
  };
};

//onsole.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
