const maxBags = (capacity, rocks, additionalRocks) => {
  let bags = [];
  for (let i in capacity) {
    bags.push([capacity[i], rocks[i]]);
  }
  bags.sort((a, b) => Math.abs(a[1] - a[0]) - Math.abs(b[1] - b[0]));
  console.log(bags);
  for (let currBag of bags) {
    if (currBag[0] !== currBag[1]) {
      let diff = currBag[0] - currBag[1];
      if (additionalRocks >= diff) {
        additionalRocks -= diff;
        currBag[1] = currBag[0];
      } else {
        break;
      }
    }
  }
  let counter = 0;
  for (let currBag of bags) {
    if (currBag[0] === currBag[1]) {
      counter++;
    }
  }
  return counter;
};

//console.log(maxBags([2, 3, 7, 4, 5], [1, 2, 2, 4, 4], 2));

const minOperations = (nums)=>{
  let counter = 0;
  for (let i = 1; i < nums.length; i++){
    if (nums[i - 1] >= nums[i]){
      const addition = nums[i - 1] - nums[i] + 1;
      counter += addition;
      nums[i] += addition;
    }
  }
  return counter;
}

//console.log(minOperations([1,5,2,4,1]))
