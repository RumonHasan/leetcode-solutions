const closeStrings = (word1, word2) => {
  const mapApproach = () => {
    if (word1.length !== word2.length) return false;
    // comparing sets as a first measure in order to check whether the letters are same or not
    const getSet = (string) => {
      let set = new Set();
      for (let char of string) {
        set.add(char);
      }
      return [...set].sort((a, b) => a.localeCompare(b)).join('');
    };
    if (getSet(word1) !== getSet(word2)) return false;

    // frequency check
    const getFreq = (string) => {
      let map = new Map();
      for (let char of string) {
        map.set(char, (map.get(char) || 0) + 1);
      }
      return map;
    };

    const sort = (array) => array.sort((a, b) => a - b);
    // final check for the frequencies being the same after sorting
    const freqOne = sort([...getFreq(word1).values()]).join('');
    const freqTwo = sort([...getFreq(word2).values()]).join('');

    return freqOne === freqTwo;
  };

  const hashApproach = () => {
    const freqHash = (string) => {
      let hash = {};
      for (let char of string) {
        hash[char] = (hash[char] || 0) + 1;
      }
      let sortedVals = [...Object.values(hash)].sort((a, b) => a - b).join('');
      return sortedVals;
    };
    // ugly set check
    if (
      [...new Set([...word1.split('')])]
        .sort((a, b) => a.localeCompare(b))
        .join('') !==
      [...new Set([...word2.split('')])]
        .sort((a, b) => a.localeCompare(b))
        .join('')
    ) {
      return false;
    }

    return freqHash(word1) === freqHash(word2);
  };
};

//console.log(closeStrings('cabbba', 'abbccc'));
// brute force approach
const oddLenSubarrays = (arr) => {
  const simpleBruteForce = () => {
    let total = 0;
    let end = 0;
    while (end < arr.length) {
      let subTotal = 0;
      let subLen = 0;
      for (let i = end; i < arr.length; i++) {
        subLen++;
        subTotal += arr[i];
        if (subLen % 2 === 1) {
          total += subTotal;
        }
      }
      end++;
    }
    return total;
  };
};

//console.log(oddLenSubarrays([1, 4, 2, 5, 3]));

const uniqueOccurence = (arr) => {
  const badApproach = () => {
    let map = new Map();
    for (let index = 0; index < arr.length; index++) {
      const number = arr[index];
      map.set(number, (map.get(number) || 0) + 1);
    }
    let values = [...map.values()];
    let hash = {};
    for (let number of values) {
      hash[number] = (hash[number] || 0) + 1;
    }
    for (let [key, value] of Object.entries(hash)) {
      if (value > 1) {
        return false;
      }
    }
    return true;
  };
};

console.log(uniqueOccurence([1, 2, 2, 1, 1, 3]));
