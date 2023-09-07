const nextGreaterElement = (nums1, nums2) => {
  // horrible approach but works
  const generalApproach = () => {
    let array = [];
    let localArray = [];
    for (let index in nums2) {
      const location = Number(index);
      localArray.push({
        location,
        number: nums2[location],
      });
    }
    for (let index = 0; index < nums1.length; index++) {
      const number = nums1[index];
      if (nums2.includes(number)) {
        let location;
        for (let index in localArray) {
          if (localArray[index].number === number) {
            location = localArray[index].location;
            break;
          }
        }
        const slice = nums2.slice(location + 1, nums2.length);
        let check = false;
        for (let subIndex = 0; subIndex < slice.length; subIndex++) {
          const subNumber = slice[subIndex];
          if (subNumber > number) {
            array.push(subNumber);
            check = true;
            break;
          }
        }
        if (!check) {
          array.push(-1);
        }
      }
    }
    return array;
  };

  //console.log(generalApproach());
};

// using two pointer approach
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
