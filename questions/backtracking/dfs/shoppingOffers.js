const shoppingOffers = (price, special, needs) => {
  let cache = new Map();
  // main backtrack function that will return the minimum cost
  const backtrack = (currNeeds) => {
    const cacheKey = currNeeds.join('-');
    // the cache key will be the entire needs array converted and separated with hyphenated string
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    let minCost = 0; // this will contain the general min cost
    for (let index = 0; index < currNeeds.length; index++) {
      const currNeed = currNeeds[index];
      const currPrice = price[index];
      const currCost = currNeed * currPrice;
      minCost += currCost;
    }
    // checking for currNeeds combination with special offers
    for (const offer of special) {
      let canSatisfy = true;
      let newNeeds = [...currNeeds];
      // if it cannot satisfy and the offer is to big then break
      for (let i = 0; i < currNeeds.length; i++) {
        const currNeed = currNeeds[i];
        if (offer[i] > currNeed) {
          canSatisfy = false;
          break;
        }
        newNeeds[i] -= offer[i]; // reducing if its less than the need
      }
      // if it can satisfy then we can recurse
      if (canSatisfy) {
        const currOffer = offer[offer.length - 1];
        let currCost = currOffer + backtrack(newNeeds); // gets the currCost then checks for the minimum cost
        minCost = Math.min(minCost, currCost);
      }
    }
    cache.set(cacheKey, minCost); // setting the current minCost and cache key
    return minCost;
  };

  return backtrack(needs);
};

/* using dfs need to find the minimum cost of getting all the needs completed for one price
    needs can be passed through the recursive approach in order to check for other possible combinations
*/
// console.log(
//   shoppingOffers(
//     [2, 5],
//     [
//       [3, 0, 5],
//       [1, 2, 10],
//     ],
//     [3, 2]
//   )
// );

// creating a list of non decreasing subsequence // caching is required
const nonDecreasingSubsequence = (nums) => {
  let collection = [];
  let minLen = 2;

  const backtrack = (currIndex, subSet) => {
    // main base case
    if (subSet.length >= minLen) {
      collection.push([...subSet]);
    }
    // general base
    if (currIndex >= nums.length) return;
    // forming all the subsets with the current index
    let set = new Set();
    for (let index = currIndex; index < nums.length; index++) {
      // checking for duplicate elements
      if (
        !set.has(nums[index]) &&
        (subSet[subSet.length - 1] <= nums[index] || subSet.length === 0)
      ) {
        subSet.push(nums[index]);
        backtrack(index + 1, subSet);
        subSet.pop();
        set.add(nums[index]);
      }
    }
  };
  backtrack(0, []);
  return collection;
};

console.log(nonDecreasingSubsequence([4, 6, 7, 7]));
