const alternatingSubnumsay = (nums) => {
  const basicIntuition = () => {
    let checknumsay = [];
    for (let index = 1; index < nums.length; index++) {
      if (nums[index - 1] > nums[index]) {
        checknumsay.push(false);
      } else {
        checknumsay.push(true);
      }
    }
    if (checknumsay.every((item) => item === true)) return -1;
    if (checknumsay.every((item) => item === false)) return -1;

    let end = 1;
    let start = 0;
    let maxLen = 0;
    let bigCounter = 0;
    let smallCounter = 0;
    while (end < nums.length) {
      const current = nums[end];
      const prev = nums[end - 1];
      if (current > prev) {
        if (current > prev) {
          bigCounter++;
          smallCounter = 0;
        } else if (current < prev) {
          smallCounter++;
          bigCounter = 0;
        }
        if (bigCounter > 1 || smallCounter > 1) {
          if (prev < current && current > nums[end + 1]) {
            start = end - 1;
          } else if (prev > current && current < nums[end + 1]) {
            start = end;
          } else {
            start = end;
          }
          smallCounter = 0;
          bigCounter = 0;
        }
        end++;
        maxLen = Math.max(maxLen, end - start + 1);
      } else {
        start = end - 1;
        end = end;
        console.log(start, end);
      }
    }
    return maxLen;
  };
};

console.log(alternatingSubnumsay([31, 32, 31, 32, 33]));
