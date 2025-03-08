const maxScore = (nums) => {
  nums.sort((a, b) => b - a);
  let score = 0;
  let prefixSum = 0;

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    prefixSum += currNum;
    if (prefixSum > 0) {
      score++;
    } else {
      break;
    }
  }

  return score;
};

console.log(
  maxScore([
    -687767, -860350, 950296, 52109, 510127, 545329, -291223, -966728, 852403,
    828596, 456730, -483632, -529386, 356766, 147293, 572374, 243605, 931468,
    641668, 494446,
  ])
);
