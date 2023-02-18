const getCommon = (nums1, nums2) => {
  //console.log(nums1, nums2);
  // using set approach to solve it using to save the copy of the element
  let set = new Set([...nums1]);
  let commonElements = [];
  for (let index in nums2) {
    if (set.has(nums2[index])) {
      commonElements.push(nums2[index]);
    }
  }
  return Math.min(...commonElements) === Infinity
    ? -1
    : Math.min(...commonElements);
};

//console.log(getCommon([1, 2, 3, 6], [2, 3, 4, 5]));
// return the minimum common integer
