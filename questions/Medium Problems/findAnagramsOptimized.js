const findAnagrams = (s, p) => {
  const timeLimitExceededSolution = () => {
    let indexList = [];
    const checkAnagramValidity = (stringOne, stringTwo) => {
      return (
        stringOne
          .split('')
          .sort((a, b) => a.localeCompare(b))
          .join('') ===
        stringTwo
          .split('')
          .sort((a, b) => a.localeCompare(b))
          .join('')
      );
    };
    // main iteration to get all the starting indices
    let initialSlice = s.slice(0, p.length);
    if (checkAnagramValidity(initialSlice, p)) {
      indexList.push(0);
    }
    let slice = initialSlice.split('');
    // applying sliding window mechanism
    let end = p.length;
    let start = 0;
    while (end < s.length) {
      slice.shift();
      slice.push(s[end]);
      start++;
      if (checkAnagramValidity(slice.join(''), p)) {
        indexList.push(start);
      }
      end++;
    }
    return indexList;
  };

  // the above solution has exceeded time limit due to repetive substring creation
  const optimized = () => {
    const arr = [];
    const obj = {};

    for (let i of p) {
      obj[i] ? (obj[i] += 1) : (obj[i] = 1);
    }

    let left = 0;
    let right = 0;
    let count = p.length;

    while (right < s.length) {
      if (obj[s[right]] > 0) count--;

      obj[s[right]]--;
      right++;

      if (count === 0) arr.push(left);

      if (right - left == p.length) {
        if (obj[s[left]] >= 0) count++;

        obj[s[left]]++;
        left++;
      }
    }
    return arr;
  };

  const personalApproach = (s, p) => {
    let mainMap = new Map();
    let checkMap = new Map();
    let result = [];
    for (let index in p) {
      const char = p[index];
      mainMap.has(char)
        ? mainMap.set(char, mainMap.get(char) + 1)
        : mainMap.set(char, 1);
      checkMap.has(s[index])
        ? checkMap.set(s[index], checkMap.get(s[index]) + 1)
        : checkMap.set(s[index], 1);
    }
    let checkKeys = [...mainMap.keys()]
      .sort((a, b) => a.localeCompare(b))
      .join('');

    // function to check for anagrams
    const checkAnagramMap = (map) => {
      // need to compare the values and keys
      for (let [key, value] of mainMap) {
        if (map.has(key) && map.get(key) !== value) {
          return false;
        }
        if (!map.has(key)) {
          return false;
        }
      }
      return true;
    };
    // first check
    if (checkAnagramMap(checkMap)) {
      result.push(0);
    }
    let rightIndex = p.length;
    let leftIndex = 0;

    while (rightIndex < s.length) {
      let leftChar = s[leftIndex];
      let rightChar = s[rightIndex];
      // initial reduction of number
      checkMap.set(leftChar, checkMap.get(leftChar) - 1);
      //deletion on hitting 0 index
      if (checkMap.get(leftChar) === 0) {
        checkMap.delete(leftChar);
      }
      leftIndex++;
      // adding the right index characters
      checkMap.has(rightChar)
        ? checkMap.set(rightChar, checkMap.get(rightChar) + 1)
        : checkMap.set(rightChar, 1);

      // checking anagram based on the size of the map
      if (checkMap.size === mainMap.size && checkAnagramMap(checkMap)) {
        console.log(leftIndex);
        result.push(leftIndex);
      }
      console.log(checkMap);

      rightIndex++;
    }
    return result;
  };

  //console.log(personalApproach('ababababab', 'aab'));
};

// goal is to get the starting indices of possible anagrams of p in s
console.log(findAnagrams('cbaebabacd', 'abc'));
