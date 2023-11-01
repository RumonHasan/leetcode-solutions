const intersectionArray = (nums1, nums2) => {
  const cleanIntuition = () => {
    const transformer = (array) => {
      return new Set([...array]);
    };

    let arrayOne = transformer(nums1);
    let arrayTwo = [...transformer(nums2)];
    let array = [];

    for (let index = 0; index < arrayTwo.length; index++) {
      if (arrayOne.has(arrayTwo[index])) {
        array.push(arrayTwo[index]);
      }
    }
    return array;
  };
};

//console.log(intersectionArray([1, 2, 2, 1], [2, 2]));
