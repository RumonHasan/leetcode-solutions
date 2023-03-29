const zeroFilledSubarrays = (nums) => {
  let subarrayCounter = 0;
  let local = 0;
  nums.map((num) => {
    if (num === 0) {
      local++;
    } else {
      local = 0;
    }
    subarrayCounter += local;
  });

  return subarrayCounter;
};

//console.log(zeroFilledSubarrays([1, 3, 0, 0, 0, 2, 0, 0, 4]));
