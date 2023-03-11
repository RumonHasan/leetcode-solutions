const intersect = (nums1, nums2) => {
  let map = new Map();
  for (let index in nums1) {
    if (map.has(nums1[index])) {
      map.set(nums1[index], map.get(nums1[index]) + 1);
    } else {
      map.set(nums1[index], 1);
    }
  }
  let resultArray = [];
  for (let index in nums2) {
    if (map.get(nums2[index]) === 0) {
      map.delete(nums2[index]);
    }
    if (map.has(nums2[index])) {
      resultArray.push(nums2[index]);
      map.set(nums2[index], map.get(nums2[index]) - 1);
    }
  }
  return resultArray;
};

//console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
