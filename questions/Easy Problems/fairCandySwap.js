const fairCandySwap = (aliceSizes, bobSizes) => {
  const getSum = (arr) => arr.reduce((a, b) => a + b);
  let aSum = getSum(aliceSizes);
  let bSum = getSum(bobSizes);

  let delta = (bSum - aSum) / 2;
  let setA = new Set(aliceSizes);
  let setB = new Set(bobSizes);

  for (let candy of setA) {
    let checkCalc = delta + candy;
    if (setB.has(checkCalc)) {
      return [candy, checkCalc];
    }
  }
  return [];
};

// console.log(fairCandySwap([1, 1], [2, 2]));

const minimumCost = (cost) => {
  let sortedCost = cost.sort((a, b) => b - a);
  let end = 0;
  let minimumCost = 0;
  let limit = 0;
  while (end < cost.length) {
    if (limit === 2) {
      limit = 0;
    } else {
      const currentCost = sortedCost[end];
      minimumCost += currentCost;
      limit++;
    }
    end++;
  }
  return minimumCost;
};

//console.log(minimumCost([6, 5, 7, 9, 2, 2]));

const countPalindromicSubstrings = (s) => {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const currChar = s[i];
    if (currChar) count++;
    // for odd traversal
    let left = i - 1 ? i - 1 : 0;
    let right = i + 1 ? i + 1 : s.length - 1;
    while (left >= 0 && right < s.length && s[left] == s[right]) {
      left--;
      right++;
      count++;
    }
    // for even traversal
    left = i;
    right = i + 1;
    while (left >= 0 && right < s.length && s[left] == s[right]) {
      left--;
      right++;
      count++;
    }
  }
  return count;
};

const maxProdDifferenceBetweenTwoPairs = (nums) => {
  let sorted = nums.sort((a, b) => b - a);
  let maxProdDifference = 0;
  for (let index = 0; index < sorted.length; index++) {
    const curr = sorted[index];
    const next = sorted[index + 1];
    const last = sorted[sorted.length - 1 - index];
    const secondLast = sorted[sorted.length - 2 - index];
    if (curr && next && last && secondLast) {
      maxProdDifference = Math.max(
        maxProdDifference,
        Math.abs(curr * next - last * secondLast)
      );
    }
  }
  return maxProdDifference;
};

// console.log(maxProdDifferenceBetweenTwoPairs([5, 6, 2, 7, 4]));

// destination city
const destCity = (paths) => {
  // console.log(paths);
  let pathMap = new Map();
  let end = 0;
  while (end < paths.length) {
    const start = paths[end][0];
    const destination = paths[end][1];
    pathMap.set(start, destination);
    end++;
  }
  for (let [key, value] of pathMap) {
    if (!pathMap.has(value)) {
      return value;
    }
  }
};

// console.log(
//   destCity([
//     ['London', 'New York'],
//     ['New York', 'Lima'],
//     ['Lima', 'Sao Paulo'],
//   ])
// );

const average = (salary) => {
  const uglyWay = () => {
    salary = salary.sort((a, b) => a - b);
    let counter = 0;
    let total = 0;
    let newArraySet = new Array(...new Set([...salary]));
    for (let index = 1; index < newArraySet.length - 1; index++) {
      let sal = newArraySet[index];
      total += sal;
      counter++;
    }
    return total / counter;
  };
};

//console.log(average([4000, 3000, 1000, 2000]));

const mergeAlternatively = (word1, word2) => {
  const basicIntuitiveApproach = () => {
    let result = '';
    let j = 0;
    let i = 0;
    while (i < word1.length && j < word2.length) {
      result += word1[i];
      result += word2[j];
      i++;
      j++;
    }
    if (word1.length === word2.length) return result;
    if (i === word1.length) {
      return (result += word2.slice(i, word2.length));
    } else {
      return result + word1.slice(j, word1.length);
    }
  };
};

//console.log(mergeAlternatively('ab', 'pqrs'));
