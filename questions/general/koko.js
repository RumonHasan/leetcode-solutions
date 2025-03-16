const kokoEatingBananas = (piles, h) => {
  let maxPile = Math.max(...piles);
  // using binary search
  let right = maxPile;
  let left = 1;
  let minPile = maxPile;

  while (left <= right) {
    let midPile = Math.floor((left + right) / 2);
    let currHour = 0;

    // checking and calculating through all the piles
    for (let i = 0; i < piles.length; i++) {
      const currPile = piles[i];
      const timeTaken = Math.ceil(currPile / midPile);
      currHour += timeTaken;
    }
    // checking the hours
    if (currHour <= h) {
      minPile = Math.min(minPile, midPile); // this is the mininum hour k count for when all the bananas are eatedn
      right = midPile - 1;
    } else {
      left = midPile + 1;
    }
  }

  return minPile;
};

// object is to find the minium k time required for koko to finish all the bananas
// approach is to check from the minimum time 1 to maxPiles then checkng through all the piles
//console.log(kokoEatingBananas([3, 6, 7, 11], 8));

// if the index is present then return it or return the index it should be placed in
const searchPosInsertion = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const midIndex = Math.floor((left + right) / 2);

    if (nums[midIndex] === target) {
      return midIndex;
    } else if (nums[midIndex] > target) {
      right = midIndex - 1;
    } else {
      left = midIndex + 1;
    }
  }

  return left;
};

console.log(searchPosInsertion([1, 3, 5, 6], 7));
