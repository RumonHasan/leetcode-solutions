const merge = (nums1, m, nums2, n) => {
  const basicIntuitiveApproach = () => {
    let test = [];
    let end = 0;
    while (end < nums1.length - n) {
      test.push(nums1[end]);
      end++;
    }
    test = [...test, ...nums2].sort((a, b) => a - b);
    for (let index in test) {
      nums1[index] = test[index];
    }
    return nums1;
  };

  console.log(basicIntuitiveApproach());
};

//console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
