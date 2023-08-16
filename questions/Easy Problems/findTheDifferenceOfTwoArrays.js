const findArrayDifference = (nums1, nums2) => {
  const checkIncludes = (nums1, nums2) => {
    let set = new Set();
    for (let index in nums1) {
      const num = nums1[index];
      if (!nums2.includes(num)) {
        set.add(num);
      }
    }
    return [...set];
  };
  let num1Array = checkIncludes(nums1, nums2);
  let num2Array = checkIncludes(nums2, nums1);
  return [num1Array, num2Array];
};

//console.log(findArrayDifference([1, 2, 3, 3], [1, 1, 2, 2]));
