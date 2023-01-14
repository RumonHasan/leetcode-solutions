const intersect = (nums1, nums2) => {
  nums1.sort();
  nums2.sort();
  let hash = {};
  for (let index in nums1) {
    hash[nums1[index]] ? hash[nums1[index]]++ : (hash[nums1[index]] = 1);
  }
  let array = [];
  for (let index in nums2) {
    if (hash[nums2[index]]) {
      array.push(nums2[index]);
      hash[nums2[index]]--;
    }
  }
  return array;
};

//console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
