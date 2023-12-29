const nonOverlappingIntervals = (intervals) => {
  const intuitiveApproach = () => {
    let minCount = 0;
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
    let prevInterval = sortedIntervals[0];
    let end = 1;
    while (end < sortedIntervals.length) {
      const currentInterval = sortedIntervals[end];
      const currStart = currentInterval[0];
      const currEnd = currentInterval[1];
      // checking for intersection
      if (currStart < prevInterval[1]) {
        if (currEnd >= prevInterval[1]) {
          minCount++;
        } else if (currEnd < prevInterval[1]) {
          minCount++;
          prevInterval = currentInterval;
        }
      } else if (prevInterval[1] <= currStart) {
        prevInterval = currentInterval;
      }
      end++;
    }
    return minCount;
  };
};

// get intervals and try it out
const partLabels = (s) => {
  const generateIntervals = (type, string) => {
    let intervalDS = type === 'map' ? new Map() : {};
    if (type === 'map') {
      for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (!intervalDS.has(char)) {
          intervalDS.set(char, [i, string.lastIndexOf(char)]);
        }
      }
    }
    return intervalDS;
  };
  // or using map
  let intervals = [...generateIntervals('map', s).values()];
  //focusing on overlapping intervals in order to find the length
  let array = [];
  let end = 1;
  let currLowerBound = intervals[0][0];
  let currMaxBound = intervals[0][1];
  while (end < intervals.length) {
    const currInterval = intervals[end];
    if (currMaxBound < currInterval[0]) {
      array.push(currMaxBound - currLowerBound + 1);
      currLowerBound = currInterval[0];
      currMaxBound = currInterval[1];
    } else if (currMaxBound < currInterval[1]) {
      currMaxBound = currInterval[1];
    }
    if (end === intervals.length - 1) {
      array.push(currMaxBound - currLowerBound + 1);
    }
    end++;
  }
  return array;
};

//console.log(partLabels('ababcbacadefegdehijhklij'));
