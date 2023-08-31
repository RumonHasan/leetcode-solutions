const minNumber = (nums1, nums2) => {
  // check for one digit
  const generalIntuitiveThinking = () => {
    let check = false;
    let collection = [];
    for (let index = 0; index < nums1.length; index++) {
      const number = nums1[index];
      if (nums2.includes(number)) {
        collection.push(number);
        check = true;
      }
    }
    // check for both
    if (!check) {
      const minNum1 = Math.min(...nums1);
      const minNum2 = Math.min(...nums2);
      const minAmongBoth = Math.min(minNum1, minNum2);
      if (minAmongBoth === minNum1) {
        let string = minAmongBoth.toString() + minNum2;
        return Number(string);
      } else {
        let string = minAmongBoth.toString() + minNum1;
        return Number(string);
      }
    }
    return check && Math.min(...collection);
  };
};

// bottom line is it will be either one or two digits
//console.log(minNumber([4, 1, 3], [5, 7]));
