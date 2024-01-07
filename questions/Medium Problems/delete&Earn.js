const deleteAndEarn = (nums) => {
  const intuitiveApproach = () => {
    const getMapAndArray = (arr) => {
      let map = new Map();
      for (let i = 0; i < arr.length; i++) {
        const currNum = arr[i];
        map.set(currNum, (map.get(currNum) || 0) + 1);
      }
      let array = [...map.keys()].sort((a, b) => a - b);
      return {
        map: map,
        array: array,
      };
    };
    const { array, map } = getMapAndArray(nums);
    let dp = new Array(array.length).fill(0);
    let end = 0;
    while (end < array.length) {
      let currNum = array[end];
      let prevNum = array[end - 1];
      if (end === 0) {
        dp[end] = map.get(currNum) * currNum;
      }
      if (end === 1) {
        if (prevNum === currNum - 1) {
          dp[end] = Math.max(dp[end - 1], map.get(currNum) * currNum);
        } else {
          dp[end] = dp[end - 1] + map.get(currNum) * currNum;
        }
      }
      if (end > 1) {
        if (prevNum === currNum - 1) {
          dp[end] = Math.max(
            dp[end - 1],
            dp[end - 2] + currNum * map.get(currNum)
          );
        } else {
          dp[end] = dp[end - 1] + map.get(currNum) * currNum;
        }
      }
      end++;
    }
    return dp[dp.length - 1];
  };
};
//[2,3,4]
//console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]));
