const longestConsequtiveSub = (nums) => {
  const optimizedSetApproach = () => {
    let set = new Set([...nums]);
    if (nums.length === 0) return 0;
    let maxCount = 1;
    for (let num of nums) {
      const right = num + 1;
      if (!set.has(right)) {
        let left = num - 1;
        let count = 1;
        if (set.has(left)) {
          while (set.has(left)) {
            left--;
            count++;
          }
          maxCount = Math.max(maxCount, count);
        } else {
          continue;
        }
      }
    }
    return maxCount;
  };
};

// max consequtive floor question
const maxConsequtiveFloors = (bottom, top, special) => {
  const TLE = () => {
    let maxConsequtive = 0;
    let floors = [];
    let specialSet = new Set([...special]);
    for (let i = bottom; i <= top; i++) {
      if (!specialSet.has(i)) {
        floors.push(i);
      }
    }
    let range = [];
    let start = floors[0];
    let end = floors[0];
    for (let i = 1; i < floors.length; i++) {
      const currFloor = floors[i];
      const prevFloor = floors[i - 1];
      if (prevFloor !== currFloor - 1) {
        end = prevFloor;
        range.push([start, end]);
        start = currFloor;
        end = currFloor;
      } else {
        end = currFloor;
      }
      if (i === floors.length - 1) {
        range.push([start, end]);
      }
    }
    if (floors.length === 0) return 0;
    console.log(range);
    for (let i = 0; i < range.length; i++) {
      maxConsequtive = Math.max(
        Math.abs(range[i][0] - range[i][1]) + 1,
        maxConsequtive
      );
    }
    return maxConsequtive;
  };
  // optimized but TLE
  const sorted = () => {
    special.sort((a, b) => a - b);
    let maxFloorCount = 0;
    let localFloorCount = 0;
    let sIndex = 0;
    for (let floor = bottom; floor <= top; floor++) {
      const currFloor = floor;
      if (currFloor === special[sIndex]) {
        localFloorCount = 0;
        sIndex++;
      } else {
        localFloorCount++;
      }
      maxFloorCount = Math.max(maxFloorCount, localFloorCount);
    }
    return maxFloorCount;
  };
  // using set to check the gap of the specials instead of checking teh entire range
  const setApproach = () => {
    special.sort((a, b) => a - b);
    let maxGapCount = 0;
    for (let i = 0; i < special.length; i++) {
      const currSpecialFloor = special[i];
      const prevSpecialFloor = special[i - 1];
      if (i === 0) {
        maxGapCount = Math.max(maxGapCount, currSpecialFloor - bottom);
      } else if (i === special.length - 1) {
        let localMax = Math.max(
          top - currSpecialFloor,
          currSpecialFloor - prevSpecialFloor
        );
        maxGapCount = Math.max(maxGapCount, localMax);
      } else {
        maxGapCount = Math.max(
          maxGapCount,
          currSpecialFloor - prevSpecialFloor - 1
        );
      }
    }
    return maxGapCount;
  };

  //console.log(setApproach());
};

// 2 3 4 5 6 7 8 9

console.log(maxConsequtiveFloors(28, 50, [35, 48]));

const revIII = (s) => {
  return s
    .split('')
    .map((_, i) => s.charAt(s.length - 1 - i))
    .join('')
    .split(' ')
    .reverse()
    .join(' ');
};
// console.log(revIII("Let's take LeetCode contest"));
