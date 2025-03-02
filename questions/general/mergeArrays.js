const mergeArrays = (nums1, nums2) => {
  let map = new Map();
  let result = [];

  // getting from first number
  for (let i = 0; i < nums1.length; i++) {
    const currId = nums1[i][0];
    const currVal = nums1[i][1];
    if (map.has(currId)) {
      const currvalid = map.get(currId);
      map.set(currId, currvalid + currVal);
    } else {
      map.set(currId, currVal);
    }
  }
  // getting from second set
  for (let i = 0; i < nums2.length; i++) {
    const currId = nums2[i][0];
    const currVal = nums2[i][1];
    if (map.has(currId)) {
      const currvalid = map.get(currId);
      map.set(currId, currvalid + currVal);
    } else {
      map.set(currId, currVal);
    }
  }

  // merging arrays
  for (const [key, value] of map) {
    const set = [key, value];
    result.push(set);
  }

  return result.sort((a, b) => a[0] - b[0]);
};

console.log(
  mergeArrays(
    [
      [1, 2],
      [2, 3],
      [4, 5],
    ],
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ]
  )
);
