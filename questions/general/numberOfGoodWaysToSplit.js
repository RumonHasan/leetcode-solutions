const numberOfGoodWaysToSplit = (nums) => {
  if (nums.every((num) => num === 0)) return 0;
  let oneCounter = 0;
  let firstOneIndex = nums.indexOf(1);
  let lastOneIndex = nums.lastIndexOf(1);
  for (let numIndex in nums) {
    if (nums[numIndex] === 1) {
      oneCounter++;
    }
  }
  if (oneCounter === 1) return 1;
  const MOD = 10 ** 9 + 7;
  oneCounter = 0;
  // getting distance between two 1s since it will be split into two so the key is to get either half of it
  let newNums = nums.slice(firstOneIndex, lastOneIndex + 1);
  let zeroCounter = 0;
  let total = 1n;
  for (let i = 1; i < newNums.length; i++) {
    const currNum = newNums[i];
    if (currNum === 0) {
      zeroCounter++;
    }
    if (currNum === 1) {
      total = (total * BigInt(zeroCounter + 1)) % BigInt(MOD);
      zeroCounter = 0;
    }
  }
  return Number(total);
};

// trick is to check all the spaces between the ones
//console.log(numberOfGoodWaysToSplit([0, 1, 0, 0, 1, 0, 0, 0, 1]));
