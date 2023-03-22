const kLengthApart = (nums, k) => {
  let oneLocations = [];
  if (k === 0) return true;
  for (let index in nums) {
    nums[index] === 1 &&
      oneLocations.push({ number: nums[index], location: Number(index) });
  }
  // egde case 2
  if (oneLocations.length === 2) {
    if (oneLocations[1].location - oneLocations[0].location > k) {
      return true;
    }
  }
  for (let index = 0; index < oneLocations.length; index++) {
    const nextIndex = index + 1;
    if (nextIndex === oneLocations.length) {
      break;
    }
    const location = oneLocations[index].location;
    const secondLocation = oneLocations[index + 1].location;
    const difference = secondLocation - location;
    if (!(difference > k)) {
      return false;
    }
  }
  return true;
};

//console.log(kLengthApart([1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1], 1));
