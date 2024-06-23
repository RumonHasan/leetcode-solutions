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
