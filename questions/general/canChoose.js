const canChoose = (groups, nums) => {
  let end = 0;
  let gIndex = 0;
  while (end < nums.length) {
    if (nums[end] === groups[gIndex][0]) {
      let subMainIndex = end;
      let check = true;
      for (let gNum of groups[gIndex]) {
        if (nums[subMainIndex] !== gNum) {
          check = false;
          break;
        }
        subMainIndex++;
      }
      // if match is found then increase to the next array
      if (check) {
        end = subMainIndex;
        gIndex++;
        if (gIndex === groups.length) {
          return true;
        }
      } else {
        end++;
      }
    } else {
      end++;
    }
  }
  return false;
};

// look for disjointed subarrays but in the same order as the groups mentioned
// console.log(canChoose([[-5, 0]], [2, 0, -2, 5, -1, 2, 4, 3, 4, -5, -5]));
